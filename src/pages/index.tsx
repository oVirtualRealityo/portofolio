import Head from "next/head";
import Link from "next/link";
import { Post } from "@/types";
import { GetServerSideProps } from "next";
import styles from "@/styles/Home.module.css"
import PostComponentOpenNoFilter from "@/components/PostComponent/PostComponentOpenNoFilter";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Typewriter from "@/components/TypeWriter/TypeWriter";


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
  const [isProjectExpanded, setIsProjectExpanded] = useState(false);
  const [isCompanyExpanded, setIsCompanyExpanded] = useState(false);

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
   Never settle,\n
   Lars Lauryssens`;

  

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
        <Typewriter text={fullIntroText} speed={40} startDelay={0}/>
        </p>
        {/* SECTION: Most Recent Post */}

        <section
          className={styles.infoSection}
        >
          <h2
          onClick={() => setIsPostExpanded(!isPostExpanded)}
          className={styles.sectionTitle}>Meest Recente Post</h2>
          {isPostExpanded && <PostComponentOpenNoFilter post={post} />}
          <p style={{width:"100%", display: "flex", justifyContent:"flex-end"}}>
          <Link href={{pathname:'/blog'}} title="Naar blogs" style={{color:"inherit"}}>Naar blogs</Link>
          </p>
        </section>

        {/* Over Mij Section */}
        <section
          className={styles.infoSection}
        >
          <h2 className={styles.sectionTitle}
          onClick={() => setIsAboutExpanded(!isAboutExpanded)}
          >Over mij</h2>
          {isAboutExpanded && (
            <p className={styles.sectionText}>
              Als je graag wat meer te weten wilt komen over mij kan je naar de "over mij" pagina gaan!
            </p>
          )}
          <p style={{width:"100%", display: "flex", justifyContent:"flex-end"}}>
          <Link href={{pathname:'/about'}} title="Naar Over mij" style={{color:"inherit"}}>Over mij</Link>
          </p>
        </section>

        <section
          className={styles.infoSection}
        >
          <h2 className={styles.sectionTitle}
          onClick={() => setIsCompanyExpanded(!isCompanyExpanded)}
          >Over het bedrijf</h2>
          {isCompanyExpanded && (
            <p className={styles.sectionText}>
              Als je <Link href={{pathname:"/company"}} style={{color:"inherit"}}>deze</Link> volgt dan kom je op de pagina over mijn stage-bedrijf terecht!
            </p>
          )}
           <p style={{width:"100%", display: "flex", justifyContent:"flex-end"}}>
          <Link href={{pathname:'/company'}} title="Naar Over company" style={{color:"inherit"}}>Over IBM-CIC</Link>
          </p>
        </section>

        {/* SECTION: Links to Other Pages */}
        <section
          className={styles.infoSection}
        >
          <h2 className={styles.sectionTitle}
          onClick={() => setIsProjectExpanded(!isProjectExpanded)}
          >Projecten</h2>
          {isProjectExpanded && (
            <p className={styles.sectionText}>
              More coming soon!
              
            </p>
          )}
           <p style={{width:"100%", display: "flex", justifyContent:"flex-end"}}>
          <Link href={{pathname:'/projects'}} title="Naar projecten" style={{color:"inherit"}}>Mijn projecten</Link>
          </p>
        </section>
      </main>


    </div>
  );
}

export default Home;