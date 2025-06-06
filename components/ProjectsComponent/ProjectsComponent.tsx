import React from 'react';
import styles from './ProjectsComponent.module.css';

const ProjectsComponent: React.FC = () => {
    const projects = [
        {
            id: 1,
            title: "Agency Website",
            technologies: ["React", "Next.js"],
            link: "/projects/#agency-website",
            img: "/project-1.webp",
        },
        {
            id: 2,
            title: "Educational Page",
            technologies: ["AstroJs", "Node.js", "Python"],
            link: "/projects/#educational-page",
            img: "/project-2.webp",
        },
        {
            id: 3,
            title: "Private Production App",
            technologies: ["PHP", "MySQL", "Laravel"],
            link: "/projects/#private-production-app",
            img: "/project-3.webp",
        },
        {
            id: 4,
            title: "HR Management System",
            technologies: ["Laravel", "PHP", "MySQL"],
            link: "/projects/#hr-management-system",
            img: "/project-4.webp",
        },
        {
            id: 5,
            title: "Car Rental App",
            technologies: ["Angular", "Django", "AWS"],
            link: "/projects/#car-rental-app",
            img: "/project-5.webp",
        },
        {
            id: 6,
            title: "Form Builder & Data Collection",
            technologies: ["VueJS", "Laravel", "Fargate"],
            link: "/projects/#form-builder-data-collection",
            img: "/project-6.webp",
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
                                loading="lazy"
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
                                <a 
                                    href={project.link} 
                                    className={styles.viewMoreButton}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    Details
                                </a>
                            </div>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default ProjectsComponent;