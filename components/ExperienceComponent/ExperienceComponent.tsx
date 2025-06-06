import React from "react";
import styles from "./ExperienceComponent.module.css";

interface Experience {
  title: string;
  period: string;
  description: string[]; // Changed to an array of strings
  technologies: string[];
  company: string;
  location: string;
}

const experiences: Experience[] = [
  {
    title: "Fullstack Developer",
    period: "Jan 2024 - Present",
    description: [
      "Developed full-stack platforms using PHP, Laravel, and Ruby for industrial companies, optimizing waste margins and increasing resource utilization efficiency by 25%.",
      "Implemented CI/CD pipelines and conducted proactive server maintenance for these platforms, ensuring reliable deployments and reducing downtime risks.",
    ],
    technologies: ["PHP", "Laravel", "Ruby", "CI/CD"],
    company: "IXTLE Solutions",
    location: "Guadalajara, Mexico",
  },
  {
    title: "Fullstack Developer Internship",
    period: "Nov 2024 - Jan 2025",
    description: [
      "Built a drag-and-drop form builder using Vue.js and Laravel, enabling dynamic data collection from multiple clients and feeding an internal database for streamlined processing and analysis.",
      "Deployed the system on AWS with containerized infrastructure, reducing operational costs by 45%.",
    ],
    technologies: ["Vue.js", "Laravel", "AWS", "Docker"],
    company: "Koeeru",
    location: "Kamakura, Japan",
  },
  {
    title: "Contract Fullstack Developer",
    period: "Jan 2023 - Nov 2024",
    description: [
      "Built full-stack web applications using PHP frameworks (primarily WordPress) and MEAN stack when required.",
      "Integrated WooCommerce and implemented SEO optimizations, custom animations (Three.js), and performance enhancements, boosting client sales and Google search visibility.",
    ],
    technologies: [
      "PHP",
      "WordPress",
      "MEAN",
      "WooCommerce",
      "Three.js",
      "SEO",
    ],
    company: "AddAstra",
    location: "Puebla, México",
  },
  {
    title: "Software Engineer Intern",
    period: "Apr 2023 - Jul 2023",
    description: [
      "Implemented a platform using RTSP protocol, Django, and React for real-time visualization and remote control of a vehicle.",
      "Developed an AI for road prediction and autonomous navigation, using AWS Lambda for real-time data processing.",
    ],
    technologies: ["Django", "React", "RTSP", "AWS Lambda"],
    company: "Mirai Innovation Research Institute",
    location: "Osaka, Japan",
  },
  {
    title: "Fullstack Developer",
    period: "2022 - Present",
    description: [
      "Led full-stack development projects primarily using the MEAN/MERN stack and occasionally PHP-based frameworks (e.g., WordPress, Laravel) for private companies and SMEs in Mexico.",
      "Designed and deployed custom software solutions that improved internal processes by at least 20%, while also enhancing online visibility through SEO and Google Search optimization.",
      "Implemented responsive UI/UX components, aligned with Figma designs, to ensure cross-device usability and modern user experiences.",
    ],
    technologies: ["MEAN", "MERN", "WordPress", "Laravel", "SEO", "Figma"],
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
          <ul className={styles.description}>
            {experience.description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
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
