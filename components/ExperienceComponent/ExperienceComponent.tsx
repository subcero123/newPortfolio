import React from "react";

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
    title: "Fullstack Developer Internship",
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
    technologies: ["MEAN Stack", "WooCommerce", "Three.js", "Angular"],
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
    <div style={{ padding: "20px", fontFamily: "p5hatty" }}>
      {experiences.map((experience, index) => (
        <div
          key={index}
          style={{
            marginBottom: "20px",
            padding: "15px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  margin: 0,
                  color: "white",
                }}
              >
                {experience.title}{" "}
                <span
                  style={{
                    marginLeft: "5px",
                    fontSize: "1.5rem",
                    color: "white",
                  }}
                >
                  {experience.company}, {experience.location}
                </span>
              </h3>
            </div>
            <div>
              <p
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "white",
                  margin: 0,
                }}
              >
                {experience.period}
              </p>
            </div>
          </div>
          <p style={{ marginTop: "1rem", color: "black", fontSize: "1.5rem" }}>
            {experience.description}
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              marginTop: "1rem",
            }}
          >
            {experience.technologies.map((tech, techIndex) => (
              <div
                style={{
                  padding: "2px 1rem",
                  border: "5px solid black",
                  width: "fit-content",
                  textAlign: "center",
                  boxShadow: "5px 5px 2px 0px rgba(0,0,0,0.75)",
                }}
              >
                <span
                  key={techIndex}
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
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
