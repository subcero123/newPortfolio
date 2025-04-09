import React from "react";
import styles from "./AboutMeComponent.module.css";

const AboutMeComponent: React.FC = () => {
  return (
    <section className={styles.container}>
      <h1 className={`${styles.title}`}>Hector Yoav Ugarte Ramírez</h1>
      <p className={styles.description}>
        I am a fullstack developer with experience in building scalable and
        dynamic platforms, specializing in MEAN Stack, Vue.js, Laravel, and AWS.
        I have worked with international startups, freelance contracts, and
        research projects in Japan and Mexico, developing innovative solutions
        for industries such as automotive, industrial, and pharmaceutical.
      </p>

      <div className="flex flex-col xl:flex-row items-center mt-4">
        <div className="w-full xl:w-1/3 flex justify-center">
          <img
            loading="lazy"
            src="/my-portfolio/me-real.webp"
            alt="Hector Yoav Ugarte Ramírez picture"
          />
        </div>
        <div className={`w-full xl:w-2/3 mt-4 xl:mt-0 xl:pl-6 flex justify-center flex-col items-center`}>
          <ul className="list-disc pl-5">
            <li className={`text-justify ${styles.description}`}>
              What I like most about being a developer is the opportunity to
              solve problems for my clients and{" "}
              <span style={{ color: "white" }}>
                create innovative solutions
              </span>{" "}
              that can make a difference in their lives.
            </li>
            <li className={`text-justify ${styles.description}`}>
              A notable achievement of mine was{" "}
              <span style={{ color: "white" }}>founding a web agency</span>{" "}
              where I spearheaded a team of{" "}
              <span style={{ color: "white" }}>4 developers</span> to deliver
              over 5 high-impact projects within a span of 6 months, showcasing
              efficiency and excellence.
            </li>
            <li className={`text-justify ${styles.description}`}>
              One of my biggest passions is learning{" "}
              <span style={{ color: "white" }}>Japanese</span> and immersing
              myself in Japanese culture. I have been studying the language for
              over <span style={{ color: "white" }}>4 years</span> and I enjoy
              exploring its rich history and traditions.
            </li>
          </ul>
          <h3 className={`${styles.title} text-center`}>My Stack and Skills</h3>

          <div className={`flex flex-wrap justify-center items-center gap-4 mt-2 ${styles["container-stack"]}`}>
            {[
              { src: "/my-portfolio/icons/angular.svg", alt: "Angular" },
              { src: "/my-portfolio/icons/react.svg", alt: "React" },
              { src: "/my-portfolio/icons/php.svg", alt: "PHP" },
              { src: "/my-portfolio/icons/laravel.svg", alt: "Laravel" },
              { src: "/my-portfolio/icons/symfony.svg", alt: "Symfony" },
              { src: "/my-portfolio/icons/docker.svg", alt: "Docker" },
              { src: "/my-portfolio/icons/aws.svg", alt: "AWS" },
            ].map((tech, index) => (
              <div
                key={index}
                className="relative group"
              >
                <img
                  loading="lazy"
                  src={tech.src}
                  alt={tech.alt}
                  className="h-20 w-20 transition-transform duration-300 hover:animate-bounce"
                />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 bg-black text-white text-sm rounded px-2 py-1 transition-opacity duration-300">
                  {tech.alt}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeComponent;
