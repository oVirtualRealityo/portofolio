import { Post } from "@/types"
import styles from "@/styles/blog.module.css"
interface PostComponentProps {
    post: Post
    togglePost: (id:string) => void;
    openPostId: string
}

const PostComponent = ({post, togglePost, openPostId}: PostComponentProps) => {
    const isOpen = openPostId === post._id;

    const shortDate = new Date(post.date).toLocaleDateString("nl-BE", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    return (
        <div className={styles.postCollapsed} onClick={() => togglePost(post._id!)}>
        <div className={styles.dateHighlight}>{shortDate}</div>
        <h2 className={styles.postTitle}>{post.title}</h2>
        <div className={styles.toggleIcon}>{isOpen ? "-" : "+"}</div>
      </div>
    )
}

export default PostComponent;
