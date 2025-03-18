import React from 'react';

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
        title: 'Software Engineer',
        period: 'Jan 2020 - Present',
        description: 'Developed and maintained web applications with a focus on performance and scalability.',
        technologies: ['React', 'TypeScript', 'Node.js', 'GraphQL'],
        company: 'TechCorp',
        location: 'San Francisco, CA',
    },
    {
        title: 'Frontend Developer',
        period: 'Jun 2018 - Dec 2019',
        description: 'Implemented responsive UI components and optimized user experience.',
        technologies: ['JavaScript', 'CSS', 'HTML', 'Vue.js'],
        company: 'WebSolutions',
        location: 'Austin, TX',
    },
];

const ExperienceComponent: React.FC = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            {experiences.map((experience, index) => (
                <div
                    key={index}
                    style={{
                        marginBottom: '20px',
                        padding: '15px',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <div>
                            <h3
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold',
                                    margin: 0,
                                    color: 'white',
                                }}
                            >
                                {experience.title}{' '}
                                <span
                                    style={{
                                        marginLeft: '5px',
                                        fontSize: '1rem',
                                        color: 'white',
                                    }}
                                >
                                    {experience.company}, {experience.location}
                                </span>
                            </h3>
                        </div>
                        <div>
                            <p
                                style={{
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    color: 'white',
                                    margin: 0,
                                }}
                            >
                                {experience.period}
                            </p>
                        </div>
                    </div>
                    <p style={{ marginTop: '1rem', color: 'black' }}>{experience.description}</p>
                    
                        <div style={{ display: 'flex', alignItems: 'center', gap: "5px", marginTop: "1rem" }}>
                            {experience.technologies.map((tech, techIndex) => (
                                <div style={{ padding: "2px 1rem", border: "5px solid black", width: "fit-content", textAlign: "center", boxShadow: "5px 5px 2px 0px rgba(0,0,0,0.75)" }}>
                                    <span key={techIndex} style={{ color: "black", fontWeight: "bold", textAlign: "center" }}>
                                        {tech}
                                    </span>
                                </div>
                            ))}
                        </div>
                </div>
            ))}
        </div>
    );
};

export default ExperienceComponent;