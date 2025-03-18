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
                <div key={index} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                    <h2>{experience.title}</h2>
                    <p>
                        <strong>Company:</strong> {experience.company} | <strong>Location:</strong> {experience.location}
                    </p>
                    <p>
                        <strong>Period:</strong> {experience.period}
                    </p>
                    <p>{experience.description}</p>
                    <p>
                        <strong>Technologies:</strong> {experience.technologies.join(', ')}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default ExperienceComponent;