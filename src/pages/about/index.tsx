import Typewriter from "@/components/TypeWriter/TypeWriter";
import styles from "@/styles/About.module.css";
import { useState } from "react";

const aboutPage = () => {
  const [modalImage, setModalImage] = useState<string>("");
  const skills = [
    "Talen: Nederlands, Engels, Frans, Duits (matig), Spaans (lerend)",
    "Programmeertalen: JavaScript, TypeScript, React, C#, SQL, NOSQL, CSS, HTML",
    "Bekwaam in: MongoDB, MySQL, React, React Native, Next.JS, Backend, FrontEnd, API ontwikkeling",
    "Portfoliorendement: +42% gemiddeld",
    "Extra: Teamplayer, leergierig, probleemoplosser",
  ];

  const introText: string = "Hallo! Ik ben <strong>Lars Lauryssens</strong>, een enthousiaste developer met een passie voor moderne webtechnologie en creatieve oplossingen. \n Ik hou van overzichtelijkheid, strakke vormgeving en praktische toepassingen. Ik leer snel en wil graag vooruitgang boeken. Ik spreek momenteel 4 talen en ben mijn vijfde aan het leren. \n  Mijn ervaring binnen IT groeit zeer snel omdat ik zeer leergierig ben en regelmatig op zelfstandige basis projecten maak zoals websites en apps."

  // Typing speed (ms per character) and extra pause (ms)
  const speed = 20;
  const extraDelay = 50;

  // Compute an array of start delays for each skill:
  // The first skill starts immediately (delay 0).
  // Each subsequent skill's delay is the sum of the durations of all previous skills.
  const delays = skills.reduce<number[]>((acc, skill, index) => {
    if (index === 0) {
      acc.push(0);
    } else {
      const previousDelay = acc[index - 1];
      // Duration for the previous skill:
      const previousDuration = skills[index - 1].length * speed + extraDelay;
      acc.push(previousDelay + previousDuration);
    }
    return acc;
  }, []);


  const handlePhotoClick = (src :string) => {
    setModalImage(src);
  };

  // Handler to close the modal
  const closeModal = () => {
    setModalImage("");
  };

  return (
    <div className={styles.pageContainer}>
      <main className={styles.mainContent}>
        <h1 className={styles.pageTitle}>Over Mij</h1>
        
        {/* TOP SECTION: Profile and Skills */}
        <div className={styles.topSection}>
          {/* Profile Section */}
          <div className={styles.profileSection}>
            <div className={styles.profilePhotoWrapper}>
              <img src="/gator.jpg" width={300} alt="Profile Photo" />
            </div>
            <blockquote className={styles.introText}>
              <q>
                <Typewriter text={introText} speed={20} startDelay={0} />
                
              </q>
            </blockquote>
            <p style={{width:"100%", paddingBottom:"0.1rem"}}>
            <Typewriter text="Ik kijk er naar uit om jullie up to date te houden met de ontwikkelingen tijdens mijn stage!" speed={50} startDelay={introText.length * 20 +100}/>
            </p>
           
            <cite>-- Lars Lauryssens</cite>
          </div>
          
          {/* Skills Aside (now part of the topSection so that on mobile it appears right after the profile) */}
          <aside className={styles.skillsAside}>
            <h2 className={styles.asideTitle}>Mijn Skills</h2>
            <ul className={styles.skillsList}>
              {skills.map((skill, index) => (
                <li key={index}>
                  <Typewriter text={skill} startDelay={delays[index]} speed={speed} />
                </li>
              ))}
            </ul>
          </aside>
        </div>

        {/* Collaborations */}
        <section className={styles.collaborations}>
          <h2 className={styles.sectionTitle}>Samenwerkingen</h2>
          <ul className={styles.collabList}>
            <li>Hogeschool: AP Hogeschool Antwerpen</li>
            <li>Tactics N.V.</li>
            <li>Fellowship of the Code</li>
          </ul>
        </section>

        {/* Links */}
        <section className={styles.links}>
          <h2 className={styles.sectionTitle}>Volg me op</h2>
          <a
            href="https://www.linkedin.com/in/lars-lauryssens-b13307200/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkButton}
          >
            LinkedIn
          </a>
        </section>

        {/* Photo Wall */}
        <section className={styles.photoSection}>
          <img
            className={styles.sectionImage}
            src="/binnen.jpg"
            alt="binnen"
            width={300}
            onClick={() => handlePhotoClick("/binnen.jpg")}
          />
          <img
            className={styles.sectionImage}
            src="/boom.jpg"
            alt="boom"
            width={300}
            onClick={() => handlePhotoClick("/boom.jpg")}
          />
          <img
            className={styles.sectionImage}
            src="/gator.jpg"
            alt="gator"
            width={300}
            onClick={() => handlePhotoClick("/gator.jpg")}
          />
        </section>
      </main>

      {/* Modal Overlay: Shows an enlarged image when a photo is clicked */}
      {modalImage && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={closeModal}>
              &times;
            </button>
            <img src={modalImage} alt="Enlarged" />
          </div>
        </div>
      )}
    </div>
  );
};

export default aboutPage;
