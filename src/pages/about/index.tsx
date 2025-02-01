import Typewriter from "@/components/TypeWriter/TypeWriter";
import styles from "@/styles/About.module.css";

const aboutPage = () => {
  const skills = [
    "Talen: Nederlands, Engels, Frans, Duits (matig), Spaans (lerend)",
    "Programmeertalen: JavaScript, TypeScript, Python, React, C#, SQL, NOSQL, CSS, HTML",
    "Bekwaam in: MongoDB, MySQL, React, React Native, Next.JS, Backend, FrontEnd, API ontwikkeling",
    "Portfoliorendement: +42% gemiddeld",
    "Extra: Teamplayer, leergierig, probleemoplosser",
  ];

  // Typing speed (ms per character) and extra pause (ms)
  const speed = 50;
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

  return (
    <div className={styles.pageContainer}>
      {/* Main Content + Aside in a 2-Column Grid */}
      <div className={styles.contentWrapper}>
        {/* Left / Main Column */}
        <main className={styles.mainContent}>
          <h1 className={styles.pageTitle}>Over Mij</h1>

          {/* Profile + Intro */}
          <div className={styles.profileSection}>
            <div className={styles.profilePhotos}>
              <div className={styles.profilePhotoWrapper}>
                <img src="/gator.jpg" width={250} alt="Profile Photo 1" />
              </div>
              <div className={styles.profilePhotoWrapper}>
                <img src="/boom.jpg" width={250} alt="Profile Photo 2" />
              </div>
              {/* Uncomment the next block if you want a third photo */}
              {/*
              <div className={styles.profilePhotoWrapper}>
                <img src="/photo3.jpg" width={250} alt="Profile Photo 3" />
              </div>
              */}
            </div>
            <blockquote className={styles.introText}>
              <q>
                Hallo! Ik ben <strong>Lars Lauryssens</strong>, een enthousiaste developer 
                met een passie voor moderne webtechnologie en creatieve oplossingen.
                Ik hou van overzichtelijkheid, strakke vormgeving en praktische toepassingen. 
                Ik leer snel en wil graag vooruitgang boeken. Ik spreek momenteel 4 talen (Nederlands, Engels, Frans, Duits).
                Mijn ervaring binnen IT groeit zeer snel omdat ik zeer leergierig ben en regelmatig op zelfstandige basis projecten maak zoals websites en apps.
                <br />
                Ik kijk er naar uit om jullie up to date te houden met de ontwikkelingen tijdens mijn stage!
              </q>
              <br />
              <cite>-- Lars Lauryssens</cite>
            </blockquote>
          </div>

          {/* Collaborations / Partnerships */}
          <section className={styles.collaborations}>
            <h2 className={styles.sectionTitle}>Samenwerkingen</h2>
            <ul className={styles.collabList}>
              <li>Hogeschool: AP Hogeschool Antwerpen</li>
              <li>Tactics N.V.</li>
              <li>Fellowship of the Code</li>
            </ul>
          </section>

          {/* Links (e.g. LinkedIn) */}
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
        </main>

        {/* Right Column / Aside */}
        <aside className={styles.skillsAside}>
          <h2 className={styles.asideTitle}>Mijn Skills</h2>
          <ul className={styles.skillsList}>
          {skills.map((skill, index) => (
              <li key={index}>
                {/* Use the computed delay for each skill */}
                <Typewriter text={skill} startDelay={delays[index]} speed={speed} />
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default aboutPage;
