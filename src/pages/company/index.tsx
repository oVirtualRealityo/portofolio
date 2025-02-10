// pages/company.tsx
import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/About.module.css"; // Using the same styling as the About page
import Typewriter from "@/components/TypeWriter/TypeWriter";

const CompanyPage = () => {

    const compDesc : string = " IBM Client Innovation Center (CIC) in Antwerpen is een toonaangevend centrum voor technologische innovatie. <br/> Hier werken experts samen aan baanbrekende IT-oplossingen, met een focus op digitalisering,  kunstmatige intelligentie en data-analyse. \n Het centrum stimuleert samenwerking en creatieve ontwikkeling om de uitdagingen van de toekomst aan te pakken."

    const locDesc : string = "Het IBM CIC is strategisch gelegen in het hart van Antwerpen, nabij belangrijke zakelijke en culturele centra. <br/> De moderne faciliteiten en de centrale ligging zorgen voor een inspirerende en efficiënte werkomgeving."


  return (
    <>
      <Head>
        <title>Company Details - Lars Lauryssens</title>
        <meta
          name="description"
          content="Details about the company where I'll be doing my internship, my role, location, and more."
        />
      </Head>
      <div className={styles.pageContainer}>
        <div className={styles.mainContent}>
          <h1 className={styles.pageTitle}>IBM Client Innovation Center Antwerp </h1>

          {/* Company Overview */}
          <section className={styles.collaborations}>
            <h2 className={styles.sectionTitle}>Over IBM CIC</h2>
            <p>
              <Typewriter text={compDesc} speed={30} startDelay={0}/>
            </p>
          </section>

          {/* Your Role */}
          <section className={styles.collaborations}>
            <h2 className={styles.sectionTitle}>Mijn Rol &amp; Responsibiliteiten</h2>
            <p>
              <Typewriter text="Full-Stack developer & Data-engineer" speed={100} startDelay={5000}/>
            </p>
          </section>

          {/* Location */}
          <section className={styles.collaborations}>
            <h2 className={styles.sectionTitle}>Locatie</h2>
            <p>
              <Typewriter text={locDesc} speed={30} startDelay={200}/>
            </p>
          </section>
          {/* Adres */}
          <section className={styles.collaborations}>
            <h2 className={styles.sectionTitle}>Adres</h2>
            <p style={{lineHeight:"1.6"}}>
              IBM Client Innovation Center (CIC)<br />
              Posthofbrug 6/8<br />
              2600 Antwerpen, België
            </p>
          </section>

          {/* Photo Gallery */}
          <section className={styles.photoSection}>
            <h2 className={styles.sectionTitle}>Gallery</h2>
            <img
              className={styles.sectionImage}
              src="/ibmlocation.webp"
              alt="Company Building"
              width={300}
            />
            <img
              className={styles.sectionImage}
              src="/ibm.png"
              alt="Logo"
              width={300}
            />
           { /*<img
              className={styles.sectionImage}
              src="/team_photo.jpg"
              alt="Team Photo"
              width={300}
            />*/}
          </section>

          {/* Navigation Link */}
          <section className={styles.links}>
            <Link href="/" className={styles.linkButton}>
              Back to Home
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default CompanyPage;
