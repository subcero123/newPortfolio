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
            link: "https://myecommerceapp.com",
            img: "/project-2.png",
        },
        {
            id: 3,
            title: "Private Production App",
            technologies: ["PHP", "MySQL", "Laravel"],
            link: "https://myblogplatform.com",
            img: "/project-3.png",
        },
        {
            id: 4,
            title: "HR Management System",
            technologies: ["Laravel", "PHP", "MySQL"],
            link: "https://mysocialmediaapp.com",
            img: "/project-4.png",
        },
        {
            id: 5,
            title: "Car Rental App",
            technologies: ["Angular", "Django", "AWS"],
            link: "https://mytaskmanager.com",
            img: "/project-5.png",
        },
        {
            id: 6,
            title: "Form Builder & Data Collection",
            technologies: ["VueJS", "Laravel", "Fargate"],
            link: "https://myweatherapp.com",
            img: "/project-6.png",
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