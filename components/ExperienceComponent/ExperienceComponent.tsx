import React from "react";
import styles from "./ExperienceComponent.module.css";

interface Experience {
  title: string;
  period: string;
  description: string;
  technologies: string[];
  company: string;
  location: string;
}

const experiences: Experience[] = [
  {
    title: "Fullstack Developer",
    period: "Nov 2024 - Jan 2025",
    description:
      "Built a drag-and-drop form builder using Vue.js and Laravel, enabling dynamic data collection from multiple clients and feeding an internal database for streamlined processing and analysis. Deployed the system on AWS with containerized infrastructure, reducing operational costs by 15%.",
    technologies: ["Vue.js", "Laravel", "AWS", "Docker"],
    company: "Koeeru",
    location: "Kamakura, Japan",
  },
  {
    title: "Contract Fullstack Developer",
    period: "Jan 2023 - Nov 2024",
    description:
      "Developed full-stack applications using the MEAN stack. Integrated WooCommerce with various eCommerce platforms, increasing client sales by 20%. Created complex animations and Three.js experiences for landing pages, improving user engagement and performance.",
    technologies: ["MEAN", "WooCommerce", "Three.js", "Angular"],
    company: "AddAstra",
    location: "Puebla, México",
  },
  {
    title: "Software Engineer Intern",
    period: "Apr 2023 - Jul 2023",
    description:
      "Implemented a platform using RTSP protocol, Django, and React for real-time visualization and remote control of a vehicle. Developed an AI for road prediction and autonomous navigation, using AWS Lambda for real-time data processing.",
    technologies: ["Django", "React", "RTSP", "AWS Lambda"],
    company: "Mirai Innovation Research Institute",
    location: "Osaka, Japan",
  },
  {
    title: "Fullstack Developer",
    period: "2023 - Present",
    description:
      "Developed custom platforms for automotive, industrial, and pharmaceutical sectors, leveraging AWS services to optimize resource management and reduce infrastructure costs by up to 30%. Migrated legacy systems to modern frameworks, ensuring smooth transitions and improved maintainability. Implemented interactive UI components and workflows in Angular, ensuring compliance with Figma designs and improving usability across multiple devices.",
    technologies: ["Angular", "AWS", "Figma", "Modernization"],
    company: "Freelancer",
    location: "Remote",
  },
];

const ExperienceComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      {experiences.map((experience, index) => (
        <div key={index} className={styles.experienceCard}>
          <div className={styles.header}>
            <div>
              <h3 className={styles.title}>
                {experience.title}{" "}
                <span className={styles.company}>
                  {experience.company}, {experience.location}
                </span>
              </h3>
            </div>
            <div>
              <p className={styles.period}>{experience.period}</p>
            </div>
          </div>
          <p className={styles.description}>{experience.description}</p>
          {experience.technologies.length > 0 && (
            <div className={styles.technologies}>
              {experience.technologies.map((technology, index) => (
                <div key={index} className={styles.technology}>
                  {technology}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default ExperienceComponent;
