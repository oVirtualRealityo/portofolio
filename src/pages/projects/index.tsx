import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/project.module.css";
import Typewriter from "@/components/TypeWriter/TypeWriter";

// Define the project type
interface Project {
  id: number;
  title: string;
  summary: string;
  screenshot: string[];
  url: string;
}

// Sample project data – replace these with your actual projects
const projects: Project[] = [
  {
    id: 1,
    title: "Project WPL Lord of the rings quizz",
    summary:
      "Hier hebben we samen met een team van 3 medestudenten een quiz site opgezet met bijbehorende landingspage en login systeem. \nJe kan hier kiezen uit verschillende game-modes en je lord of the rings kennis testen aan de hand van vele vragen! \nJe kan inloggen met test test of een nieuw account aanmaken. \n\nDe bijgevoegde link is een render link, soms kan het even duren voordat de webservice opstart. Patience is key",
    screenshot: ["/lotr-quizz.png", "/lotr2.png"],
    url: "https://wpl-project-lotr.onrender.com/",
  },
  {
    id: 2,
    title: "Project Hete saus",
    summary:
      "Een webshop die ik heb opgezet voor het verkopen van verschillende hotsauces, de stijling is vrij tot zeer druk, hieraan kun je ook mijn progressie in het front-end ontwikkelen zien. \nDit project heeft zeer goed gescoord, maar ik zou het nu wel anders stijlen en indelen.",
    screenshot: ["/hetesaus.png", "/hetesaus2.png", "/hetesays3.png"],
    url: "https://project-webontwikkeling-0lf4.onrender.com/",
  },
  {
    id: 3,
    title: "Project Unknown",
    summary:
      "Dit vul ik binnenkort nog aan! Het gaat over een mobiele app die we hebben moeten maken voor een van onze vakken in react native.",
    screenshot: [],
    url: "",
  },
];

// A reusable Screenshot Carousel component that calls back when an image is clicked
interface ScreenshotCarouselProps {
  screenshots: string[];
  openModal: (src: string) => void;
}
const ScreenshotCarousel = ({ screenshots, openModal }: ScreenshotCarouselProps) => {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselInner}>
        {screenshots.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Screenshot ${index + 1}`}
            className={styles.carouselImage}
            onClick={() => openModal(src)}
          />
        ))}
      </div>
    </div>
  );
};

// A reusable component for each project item
interface ProjectItemProps {
  project: Project;
  openModal: (src: string) => void;
}
const ProjectItem = ({ project, openModal }: ProjectItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.projectItem}>
      <div
        className={styles.projectCollapsed}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <span className={styles.toggleIcon}>
          {isExpanded ? "−" : "+"}
        </span>
      </div>
      {isExpanded && (
        <div className={styles.projectExpanded}>
          <p className={styles.projectSummary}>
            <Typewriter text={project.summary} speed={70} startDelay={0} />
          </p>
          {project.screenshot.length > 0 && (
            <ScreenshotCarousel
              screenshots={project.screenshot}
              openModal={openModal}
            />
          )}
          {project.url && project.url.trim() !== "" && (
            <div style={{ marginTop: "1rem" }}>
              <Link
                href={project.url}
                target="_blank"
                className={styles.linkButton}
              >
                View Project
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const ProjectPage = () => {
  // Global state for the modal image
  const [modalImage, setModalImage] = useState<string>("");

  const openModal = (src: string) => {
    setModalImage(src);
  };

  const closeModal = () => {
    setModalImage("");
  };

  return (
    <>
      <Head>
        <title>Projects - Portfolio of Lars Lauryssens</title>
        <meta name="description" content="A list of projects with summaries." />
      </Head>
      <div className={styles.pageWrapper}>
        <div className={styles.contentContainer}>
          <h1 className={styles.pageTitle}>Projects</h1>
          <div className={styles.projectList}>
            {projects.map((project) => (
              <ProjectItem key={project.id} project={project} openModal={openModal} />
            ))}
          </div>
          <Link href="/" className={styles.linkButton}>
            Back to Home
          </Link>
        </div>
      </div>
      {/* Global Modal rendered at the page level */}
      {modalImage && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={closeModal}>
              &times;
            </button>
            <img src={modalImage} alt="Enlarged Screenshot" />
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectPage;
