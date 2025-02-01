import Head from "next/head";
import Link from "next/link";
import { Post } from "@/types";
import { GetServerSideProps } from "next";
import styles from "@/styles/Home.module.css"
import PostComponentOpenNoFilter from "@/components/PostComponent/PostComponentOpenNoFilter";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


interface HomePageProps {
  post: Post;
}

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  const res = await fetch("https://portofolio-alpha-lac.vercel.app/api/posts");
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  const sortedData = [...data].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  const post: Post = sortedData[0];

  return {
    props: {
      post: post,
    },
  };
};

const Home = ({ post }: HomePageProps) => {
  const [isPostExpanded, setIsPostExpanded] = useState(false);
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);

  const [displayedIntroText, setDisplayedIntroText] = useState("");
  const router = useRouter();

  //extras
   // Define the full intro text. Use \n for line breaks.
   const fullIntroText = `Welkom op mijn portofolio website!
   Hier houd ik jullie up to date met hoe mijn stage verloopt en zal ik proberen dagelijks een update te plaatsen.
   Ik kijk ernaar uit om veel te leren van deze stage!\n
   De website is een work in progress en zal dus continu worden bijgewerkt, zowel de functionaliteit als de stijling.\n
   Hieronder staan enkele buttons naar de extra paginas!\n 
   De website is gemaakt met Next.js, een framework van Vercel.\n
   Met vriendelijke groeten,\n
   Lars Lauryssens`;

   useEffect(() => {
    const delayBeforeStart = 1000; // 1 second delay before starting the typewriter effect
    let currentIndex = 0;
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayedIntroText(fullIntroText.slice(0, currentIndex + 1));
        currentIndex++;
        if (currentIndex === fullIntroText.length) {
          clearInterval(interval);
        }
      }, 50); // Change 50 (ms) to adjust the typing speed
    }, delayBeforeStart);

    return () => clearTimeout(startTimeout);
  }, [fullIntroText]);

  return (
    <div className={styles.pageWrapper}>
      <Head>
        <title>Portofolio Lars Lauryssens</title>
        <meta
          name="description"
          content="Welkom op het portfolio van Lars Lauryssens"
        />
      </Head>

      <main className={styles.contentContainer}>
        <h1 className={styles.pageTitle}>Portofolio Lars Lauryssens</h1>

        {/* SECTION: Profile Picture */}
        <p className={styles.shortIntro}>
        {displayedIntroText}
        </p>
        {/* SECTION: Most Recent Post */}

        <section
          className={styles.infoSection}
          onClick={() => setIsPostExpanded(!isPostExpanded)}
        >
          <h2 className={styles.sectionTitle}>Meest Recente Post</h2>
          {isPostExpanded && <PostComponentOpenNoFilter post={post} />}
        </section>

        {/* Over Mij Section */}
        <section
          className={styles.infoSection}
          onClick={() => setIsAboutExpanded(!isAboutExpanded)}
        >
          <h2 className={styles.sectionTitle}>Over mij</h2>
          {isAboutExpanded && (
            <p className={styles.sectionText}>
              Korte tekst over mij. Vermeld hier wie je bent, wat je doet, en een korte
              blik op je werk.
            </p>
          )}
        </section>

        {/* SECTION: Links to Other Pages */}
        <section
          className={styles.infoSection}
          onClick={() => setIsAboutExpanded(!isAboutExpanded)}
        >
          <h2 className={styles.sectionTitle}>Projecten</h2>
          {isAboutExpanded && (
            <p className={styles.sectionText}>
              More coming soon!
              
            </p>
          )}
        </section>
      </main>


    </div>
  );
}

export default Home;