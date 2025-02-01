import Head from "next/head";
import Link from "next/link";
import { Post } from "@/types";
import { GetServerSideProps } from "next";
import styles from "@/styles/Home.module.css"
import PostComponentOpenNoFilter from "@/components/PostComponent/PostComponentOpenNoFilter";
import { useRouter } from "next/navigation";


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

const Home = ({post} : HomePageProps) => {
  const router = useRouter();
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
        <p>
          Welkom op mijn portofolio website! <br/>
          Hier houd ik jullie up to date met hoe mijn stage verloopt en zal ik proberen dagelijks een update te plaatsen.
          Ik kijk ernaar uit om veel te leren van deze stage!
          De website is een work in progress en zal dus continu worden bijgewerkt, zowel de functionaliteit als de stijling. <br/>

          Hieronder staan enkele buttons naar de extra paginas! <br/>
          <br/>

          De website is gemaakt met Next.js, een framework van Vercel.<br/>
          <br/>

          Met vriendelijke groeten, <br/>
          Lars Lauryssens
        </p>
        {/* SECTION: Most Recent Post */}

        <section className={styles.infoSection} onClick={() => router.push("/blog") }>
          <h2 className={styles.sectionTitle}>
            Meest Recente Post
            
          </h2>
          <PostComponentOpenNoFilter post={post} />
        </section>

        {/* SECTION: Short Intro */}
        <section className={styles.infoSection} onClick={() => router.push("/about")}>
          <h2 className={styles.sectionTitle}>
            Over mij
            
          </h2>
          <p className={styles.sectionText}>
            Korte tekst over mij. Vermeld hier wie je bent, wat je doet, en een korte
            blik op je werk.
          </p>
        </section>

        {/* SECTION: Links to Other Pages */}
        <section className={styles.infoSection}>

          <h2 className={styles.sectionTitle}>Projecten</h2>
          <p className={styles.sectionText}>
            More coming soon!
          </p>
        </section>
      </main>

      
    </div>
  );
}

export default Home;