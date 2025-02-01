import styles from "@/styles/About.module.css";
const aboutPage = () => {
  return (
    <div className="page-container">
      {/* Main Content + Aside in a 2-Column Grid */}
      <div className="content-wrapper">
        {/* Left / Main Column */}
        <main className="main-content">
          <h1 className="page-title">Over Mij</h1>
          
          {/* Profile + Intro */}
          <div className="profile-section">
            {/* Example profile photo - replace src with your actual image */}
            <div className="profile-photo-wrapper">
              <img
                src="/gator.jpg"
                width={250}
              />
            </div>
            <blockquote className="intro-text">
              <q>
              
              Hallo! Ik ben <strong>Lars Lauryssens</strong>, een enthousiaste developer 
              met een passie voor moderne webtechnologie en creatieve oplossingen.
              Ik hou van overzichtelijkheid, strakke vormgeving en praktische toepassingen. 
              Ik leer snel en wil graag vooruitgang boeken. Ik spreek momenteel 4 talen (Nederlands, Engels, Frans, Duits).
              Mijn ervaring binnen IT groeit zeer snel omdat ik zeer leergierig ben en regelmatig op zelfstandige basis projecten maak zoals websites en apps.

              Ik kijk er naar uit om jullie up to date te houden met de ontwikkelingen tijdens mijn stage!
              </q>
              <br/>
              <cite>-- Lars Lauryssens</cite>              
            </blockquote>
          </div>

          {/* Collaborations / Partnerships */}
          <section className="collaborations">
            <h2 className="section-title">Samenwerkingen</h2>
            <ul className="collab-list">
              <li>Hogeschool: AP Hogeschool Antwerpen</li>
              <li>Tactics N.V.</li>
              <li>Fellowship of the Code</li>
            </ul>
          </section>

          {/* Links (e.g. LinkedIn) */}
          <section className="links">
            <h2 className="section-title">Volg me op</h2>
            <a
              href="https://www.linkedin.com/in/lars-lauryssens-b13307200/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-button"
            >
              LinkedIn
            </a>
          </section>
        </main>

        {/* Right Column / Aside */}
        <aside className="skills-aside">
          <h2 className="aside-title">Mijn Skills</h2>
          <ul className="skills-list">
            <li>
              <strong>Talen:</strong> Nederlands, Engels, Frans, Duits (matig), Spaans (lerend)
            </li>
            <li>
              <strong>Programmeertalen:</strong> JavaScript, TypeScript, Python, React, C#, SQL, NOSQL, CSS, HTML
            </li>
            <li>
              <strong>Bekwaam in:</strong> MongoDB, MySQL, React, React Native, Next.JS, Backend, FrontEnd, API ontwikkeling
            </li>
            <li>
              <strong>Portfoliorendement:</strong> +42% gemiddeld
            </li>
            <li>
              <strong>Extra:</strong> Teamplayer, leergierig, probleemoplosser
            </li>
          </ul>
        </aside>
      </div>

      {/* Page Styles */}
      <style jsx>{`
        /* 
         * Outer Container with Gradient Background
         */
        .page-container {
          min-height: 100vh;
          padding: 2rem;
          display: flex;
          justify-content: center;
          background: linear-gradient(135deg, #141e30 0%, #243b55 100%);
        }

        /* 
         * Wrapper for 2-Column Layout
         */
        .content-wrapper {
          width: 100%;
          max-width: 1200px;
          display: grid;
          grid-template-columns: 3fr 1fr;
          gap: 2rem;
          color: #ffffff;
        }

        /* 
         * Main / Left Column
         */
        .main-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .page-title {
          font-size: 2rem;
          font-weight: 500;
          margin: 0 0 1rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.3);
          padding-bottom: 0.5rem;
        }

        .profile-section {
          display: flex;
          gap: 1.5rem;
          align-items: center;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 1.5rem;
        }
       
        .profile-photo-wrapper {
          width: 250px;
          height: 250px;
          flex-shrink: 0;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid rgba(255,255,255,0.3);
        }

       

        .intro-text {
          line-height: 1.6;
          min-width:120px
        }

        .collaborations, .links {
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 1.5rem;
        }

        .section-title {
          font-size: 1.3rem;
          margin: 0 0 1rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.3);
          padding-bottom: 0.5rem;
          font-weight: 400;
        }

        .collab-list {
          list-style: disc;
          padding-left: 1.5rem;
          margin: 0;
        }

        .links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .link-button {
          display: inline-block;
          width: fit-content;
          background-color: #ffffff;
          color: #000000;
          padding: 0.6rem 1.2rem;
          border-radius: 6px;
          text-decoration: none;
          font-size: 0.95rem;
          transition: background-color 0.2s ease;
        }

        .link-button:hover {
          background-color: #e2e2e2;
        }

        /* 
         * Aside / Right Column
         */
        .skills-aside {
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 1.5rem;
          margin-top:2.8rem;
          align-self: start; /* Keep aside at the top */
        }

        .aside-title {
          font-size: 1.3rem;
          margin: 0 0 1rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.3);
          padding-bottom: 0.5rem;
          font-weight: 400;
        }

        .skills-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .skills-list li {
          line-height: 1.4;
        }

        /* 
         * Responsive
         */
        @media (max-width: 900px) {
          .content-wrapper {
            grid-template-columns: 1fr;
          }

          .skills-aside {
            margin-top: 2rem;
          }
          .profile-section {
          flex-wrap: wrap;
          justify-content:center;
          align-items:center;
          }
        }
      `}</style>
    </div>
  );
};

export default aboutPage;
