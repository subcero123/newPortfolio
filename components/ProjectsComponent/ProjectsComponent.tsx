import React from 'react';
import styles from './ProjectsComponent.module.css';

const ProjectsComponent: React.FC = () => {
    const projects = [
        {
            id: 1,
            title: "Agency Website",
            technologies: ["React", "Next.js"],
            link: "https://haly.digital/es",
            img: "/my-portfolio/project-1.webp",
        },
        {
            id: 2,
            title: "Educational Page",
            technologies: ["AstroJs", "Node.js", "Python"],
            link: "https://ciiec.netlify.app/#",
            img: "/my-portfolio/project-2.webp",
        },
        {
            id: 3,
            title: "Private Production App",
            technologies: ["PHP", "MySQL", "Laravel"],
            link: "http://iocsa.ixtle.org/login.php",
            img: "/my-portfolio/project-3.webp",
        },
        {
            id: 4,
            title: "HR Management System",
            technologies: ["Laravel", "PHP", "MySQL"],
            link: "http://nomina-dev.lan.clinik.com:30080/dashboard",
            img: "/my-portfolio/project-4.webp",
        },
        {
            id: 5,
            title: "Car Rental App",
            technologies: ["Angular", "Django", "AWS"],
            link: "https://armoredmex.mx/",
            img: "/my-portfolio/project-5.webp",
        },
        {
            id: 6,
            title: "Form Builder & Data Collection",
            technologies: ["VueJS", "Laravel", "Fargate"],
            link: "https://formbuilder.my.canva.site/",
            img: "/my-portfolio/project-6.webp",
        },
    ];

    return (
        <div className={styles.gridContainer}>
            {projects.map((project) => (
                <div
                    key={project.id}
                    className={styles.projectCard}
                    onClick={(e) => e.stopPropagation()}
                >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <div className={styles.imageContainer}>
                            <img
                                src={project.img}
                                alt={project.title}
                                className={styles.projectImage}
                            />
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
                    </a>
                </div>
            ))}
        </div>
    );
};

export default ProjectsComponent;