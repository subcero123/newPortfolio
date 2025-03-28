import React from 'react';
import styles from './ProjectsComponent.module.css';

const ProjectsComponent: React.FC = () => {
    const projects = [
        {
            id: 1,
            title: "Agency Website",
            technologies: ["React", "Next.js"],
            link: "https://haly.digital/es",
            img: "/project-1.png",
        },
        {
            id: 2,
            title: "Educational Page",
            technologies: ["AstroJs", "Node.js", "Python"],
            link: "https://ciiec.netlify.app/#",
            img: "/project-2.png",
        },
        {
            id: 3,
            title: "Private Production App",
            technologies: ["PHP", "MySQL", "Laravel"],
            link: "http://iocsa.ixtle.org/login.php",
            img: "/project-3.png",
        },
        {
            id: 4,
            title: "HR Management System",
            technologies: ["Laravel", "PHP", "MySQL"],
            link: "http://nomina-dev.lan.clinik.com:30080/dashboard",
            img: "/project-4.png",
        },
        {
            id: 5,
            title: "Car Rental App",
            technologies: ["Angular", "Django", "AWS"],
            link: "https://armoredmex.mx/",
            img: "/project-5.png",
        },
        {
            id: 6,
            title: "Form Builder & Data Collection",
            technologies: ["VueJS", "Laravel", "Fargate"],
            link: "https://formbuilder.my.canva.site/",
            img: "/project-6.png",
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