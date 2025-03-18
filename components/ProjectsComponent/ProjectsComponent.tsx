import React from 'react';
import styles from './ProjectsComponent.module.css';

const ProjectsComponent: React.FC = () => {
    const projects = [
        {
            id: 1,
            title: "Portfolio Website",
            technologies: ["React", "Next.js", "CSS"],
            link: "https://myportfolio.com",
            img: "https://placehold.co/600x400/EEE/31343C",
        },
        {
            id: 2,
            title: "E-commerce App",
            technologies: ["React", "Node.js", "MongoDB"],
            link: "https://myecommerceapp.com",
            img: "https://placehold.co/600x400/EEE/31343C",
        },
        {
            id: 3,
            title: "Blog Platform",
            technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
            link: "https://myblogplatform.com",
            img: "https://placehold.co/600x400/EEE/31343C",
        },
        {
            id: 4,
            title: "Social Media App",
            technologies: ["Angular", "Express", "MySQL"],
            link: "https://mysocialmediaapp.com",
            img: "https://placehold.co/600x400/EEE/31343C",
        },
        {
            id: 5,
            title: "Task Manager",
            technologies: ["React", "Redux", "TypeScript"],
            link: "https://mytaskmanager.com",
            img: "https://placehold.co/600x400/EEE/31343C",
        },
        {
            id: 6,
            title: "Weather App",
            technologies: ["React", "OpenWeather API", "Bootstrap"],
            link: "https://myweatherapp.com",
            img: "https://placehold.co/600x400/EEE/31343C",
        },
    ];

    return (
        <div className={styles.gridContainer}>
            {projects.map((project) => (
                <div key={project.id} className={styles.projectCard}>
                    <div className={styles.imageContainer}>
                        <img src={project.img} alt={project.title} className={styles.projectImage} />
                        <div className={styles.overlay}>
                            <span className={styles.projectTitle}>{project.title}</span>
                            <ul className={styles.technologiesList}>
                                {project.technologies.map((tech, index) => (
                                    <li key={index} className={styles.technology}>
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectsComponent;