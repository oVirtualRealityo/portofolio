import { Post } from "@/types";
import { GetServerSideProps } from "next";
import { useState } from "react";
import styles from "@/styles/blog.module.css"
import PostComponent from "@/components/PostComponent/PostComponent";
import PostComponentOpen from "@/components/PostComponent/PostComponentOpen";
import BlogHeader from "@/components/BlogHeader/BlogHeader";
import AddForm from "@/components/Forms/AddForm";
import DOMPurify from 'dompurify';

/* ---------------------------
   Server-Side Data Fetch
---------------------------- */
interface postPageProps {
  posts: Post[];
}

export const getServerSideProps: GetServerSideProps<postPageProps> = async () => {
  const res = await fetch("https://portofolio-alpha-lac.vercel.app/api/posts");
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  console.log(data)
  return {
    props: {
      posts: data,
    },
  };
};

/* ---------------------------
   Main Page Component
---------------------------- */
const postPage = ({ posts }: postPageProps) => {
  const [admin, setIsAdmin] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("");

  // Open the first post by default
  const sortedPosts = [...posts].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      console.log(a.date, dateA);
      console.log(b.date, dateB);


    return dateB - dateA; // Sorts in descending order (latest date first, latest hour first)
  });  
  const [openPostId, setOpenPostId] = useState<string | null>(sortedPosts[0]?._id || null);
  const filteredPosts: Post[] = sortedPosts.filter((post) =>
    post.tags.length === 0 || post.tags.some((tag) => tag.toLowerCase().includes(filter.toLowerCase()))
  );
  //Handler functie voor de admincheck
  const handleAdmin = async () => {
    if (admin) {
      setIsAdmin(false);
      return;
    }
    else {
      const guess = window.prompt("Geef het adminpasswoord");
      if (!guess) {
        window.alert("No password entered.");
        return;
      }
      const sanitizedInput = DOMPurify.sanitize(guess);
      const response = await fetch("https://portofolio-alpha-lac.vercel.app/api/admin", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password: sanitizedInput }),
      });
      const data = await response.json();

      if (data.success) {
        setIsAdmin(true);
      }
      else {
        setIsAdmin(false);
        window.alert("Fout wachtwoord");
      }
    }
  }
  //handler functie voor de filter 

  // Toggle open/closed state of a post
  const togglePost = (postId: string) => {
    setOpenPostId(openPostId === postId ? null : postId);
  };

  

  // Toggle this to hide/show the "Add New Post" form
  console.log(filter)
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Mijn Blogs</h1>
     
      {admin && (
        <AddForm/>
)}
      <BlogHeader filter={filter} setFilter={setFilter} handleAdmin={handleAdmin} admin={admin}/>
    

      <div className={styles.postsList}>
        {filteredPosts && filteredPosts.length > 0 ? (
          filteredPosts.map((post) => {
            const isOpen = openPostId === post._id;
            return (
              <article key={post._id} className={`${styles.postItem} ${isOpen ? "open" : ""}`}>
                {/* Collapsed View (always visible) */}
                <PostComponent post={post} openPostId={openPostId!} togglePost={togglePost} />

                {/* Expanded View (only if open) */}
                {isOpen && (
                  <PostComponentOpen post={post} setFilter={setFilter} />
                )}
              </article>
            );
          })
        ) : (
          <p className={styles.noPostMessage}>Geen blogs gevonden</p>
        )}
      </div>
    
    </div>
  );
};


export default postPage;
