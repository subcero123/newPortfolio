// app/projects/page.tsx
"use client";
import type React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import { useState, useEffect } from "react";
import BadgeTag from "@/components/BadgeTag";
import styles from "./projects.module.css";

export default function ProjectsPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  // Estado para la chapa seleccionada
  const [selectedBadge, setSelectedBadge] = useState<number | null>(2);
  const [badgeOffset, setBadgeOffset] = useState(0);
  // Estados para las animaciones
  const [isAnimating, setIsAnimating] = useState(false);
  const [pendingBadge, setPendingBadge] = useState<number | null>(null);
  const [animationTrigger, setAnimationTrigger] = useState(0);
  const [isScrollAnimating, setIsScrollAnimating] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [previousPositions, setPreviousPositions] = useState<{ [key: string]: number }>({});

  const projects = [
    {
      id: 1,
      title: "Agency Website",
      technologies: ["React", "Next.js"],
      imgs: ["/project-1.webp"],
      description:
        "I built a web agency landing page for my company using Next.js and React, focusing on SEO optimization, performance, and visual appeal. The goal was to consolidate my knowledge in these technologies and improve my skills in SEO optimization.",
      webpage: "https://example.com/agency",
    },
    {
      id: 2,
      title: "Educational Page",
      technologies: ["AstroJs", "Node.js", "Python"],
      imgs: ["/project-2.webp"],
      description:
        "Redesigned and modernized a university website using Astro, ensuring compatibility with legacy apps through code refactoring. The site is mobile/desktop optimized and built for easy future maintenance and content updates.",
      webpage: "https://example.com/education",
    },
    {
      id: 3,
      title: "Private App",
      technologies: ["PHP", "MySQL", "Laravel"],
      imgs: ["/project-3.webp"],
      description:
        "Developed a web app for a private company specializing in medicine packaging, covering all stages of their production process. The app includes performance metrics to identify issues and areas for improvement. It’s actively maintained and continuously evolving with new features.",
      webpage: "https://example.com/production",
    },
    {
      id: 4,
      title: "HR System",
      technologies: ["Laravel", "PHP", "MySQL"],
      imgs: ["/project-4.webp"],
      description:
        "Developed an HR application covering key processes from employee attendance, integrated with ZKTeco devices via API, to payroll generation with calculations and simulations for salaries, vacations, and more.",
      webpage: "https://example.com/hrms",
    },
    {
      id: 5,
      title: "Car Rental App",
      technologies: ["Angular", "Django", "AWS"],
      imgs: ["/project-5.webp"],
      description:
        "Built a web app for a luxury car rental and security company, using AWS for optimization and secure data handling. Features include secure auth, car quoting, maintenance and trip tracking, vehicle location, and service performance metrics.",
      webpage: "https://example.com/carrental",
    },
    {
      id: 6,
      title: "Form Builder",
      technologies: ["VueJS", "Laravel", "Fargate"],
      imgs: ["/project-6.webp"],
      description:
        "Built a customizable form builder using Vue.js with a strong focus on UI/UX. Integrated with AWS Fargate for deployment as a new service for a Japanese company. Designed to handle thousands of responses efficiently, with well-structured data storage for future analysis.",
      webpage: "https://example.com/formbuilder",
    },
  ];

  // Crear los badges a partir de los títulos de los proyectos
  const badges = projects.map((project) => ({
    text: project.title.toUpperCase(),
  }));

  // Mapeo de hashtags a índices de proyectos
  const hashtagToProject: { [key: string]: number } = {
    "agency-website": 0,
    "educational-page": 1,
    "private-production-app": 2,
    "hr-management-system": 3,
    "car-rental-app": 4,
    "form-builder-data-collection": 5,
  };

  // Efecto para detectar hashtag en la URL
  useEffect(() => {
    const hash = window.location.hash.slice(1); // Remover el #
    const projectIndex = hashtagToProject[hash];

    if (projectIndex !== undefined) {
      // Seleccionar el proyecto
      setSelectedBadge(projectIndex);

      // Calcular el offset para que el proyecto esté en el centro (posición 3, rotación 0)
      const centerPosition = 3;
      const newOffset =
        (projectIndex - centerPosition + badges.length) % badges.length;
      setBadgeOffset(newOffset);
    }
  }, [badges.length]);

  // Rotaciones fijas según la posición de visualización
  const rotations = [-15, -10, -5, 0, 5, 10, 15, 10, 5, 0, -5, -10, -15];
  const visibleCount = 6;
  const canScrollUp = badgeOffset > 0;
  const canScrollDown = badgeOffset + visibleCount < badges.length;

  // Efecto para actualizar posiciones cuando no está animando
  useEffect(() => {
    if (!isScrollAnimating) {
      const newPositions: { [key: string]: number } = {};
      Array.from({ length: visibleCount }).forEach((_, visibleIndex) => {
        const index = (badgeOffset + visibleIndex) % badges.length;
        const badge = badges[index];
        const badgeKey = `${badge.text}-${index}`;
        newPositions[badgeKey] = visibleIndex;
      });
      setPreviousPositions(newPositions);
    }
  }, [badgeOffset, isScrollAnimating, badges, visibleCount]);

  const handleToggleExpand = (id: number | null) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleBadgeClick = (badgeIdx: number) => {
    if (selectedBadge === badgeIdx) return;

    setIsAnimating(true);
    setPendingBadge(badgeIdx);
    setSelectedBadge(badgeIdx);
    setTimeout(() => {
      setIsAnimating(false);
      setPendingBadge(null);
    }, 30);
  };

  return (
    <div className={styles.pageContainer}>
      <main className={styles.mainContent}>
        <div className="bg-cover bg-center w-full z-0">
          <Header onMenuClick={handleToggleExpand} />
        </div>
        {/* og-image como fondo fill y centrado */}
        <div
          className={`${styles.bgImage} ${styles.primaryBg}`}
          style={{ backgroundImage: "url(/og-image.png)" }}
        />
        {/* Filtro verde con opacidad */}
        <div
          className={styles.bgImage}
          style={{
            background:
              "linear-gradient(-135deg, rgba(8,204,8,0.0) 0%, rgba(8,204,8,0.3) 70%)",
            zIndex: 1,
          }}
        />
        {/* repeating_pattern encima de og-image, pero debajo del contenido */}
        <div
          className={`${styles.bgImage} ${styles.patternBg}`}
          style={{ backgroundImage: "url(/repeating_pattern.png)" }}
        />
        {/* dlc_ballchain_bg.png delante del repeating pattern pero detrás de las badges */}
        <div
          className={`${styles.bgImage} ${styles.ballchainBg}`}
        />
        {/* header-bg.webp siempre encima */}
        <div className={styles.headerBgContainer}>
          <Image
            src="/header-bg.webp"
            alt="Imagen de encabezado"
            width={1920}
            height={200}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            priority
          />
        </div>
        {/* Contenido del main */}
        <div className={styles.contentContainer}>
          {/* Flecha arriba */}
            <button
              onClick={() => {
                if (isScrollAnimating) return;
                setIsScrollAnimating(true);
                setScrollDirection('up');
                // Capturar posiciones ANTES de cambiar el offset
                const currentPositions: { [key: string]: number } = {};
                Array.from({ length: visibleCount }).forEach((_, visibleIndex) => {
                  const index = (badgeOffset + visibleIndex) % badges.length;
                  const badge = badges[index];
                  const badgeKey = `${badge.text}-${index}`;
                  currentPositions[badgeKey] = visibleIndex;
                });
                setPreviousPositions(currentPositions);
                
                setBadgeOffset((prev) => (prev + 1) % badges.length);
                setAnimationTrigger(prev => prev + 1);
                setTimeout(() => {
                  setIsScrollAnimating(false);
                  setScrollDirection(null);
                }, 250);
              }}
              className={`${styles.navButton} ${styles.upButton}`}
              aria-label="Ver anteriores"
              disabled={isScrollAnimating}
            >
              <Image
                src="/arrow.svg"
                alt="Flecha arriba"
                width={100}
                height={50}
                style={{ filter: "invert(1)", transform: "rotateX(180deg) rotate(75deg)" }}
              />
            </button>

          {/* Semi-círculo de chapas centrado */}
          <div className={`${styles.badgesContainer} ${isScrollAnimating ? styles.badgesScrolling : ''}`} key={`container-${animationTrigger}`}>
            {Array.from({ length: visibleCount }).map((_, visibleIndex) => {
              const index = (badgeOffset + visibleIndex) % badges.length;
              const badge = badges[index];
              const rotation = rotations[visibleIndex];
              const isClickable = rotation !== -15 && rotation !== 10;
              
              // Track position changes for animation
              const badgeKey = `${badge.text}-${index}`;
              const currentPosition = visibleIndex;
              const previousPosition = previousPositions[badgeKey];

              // Create wrapper div for animation classes
              let animationClass = '';
              let wrapperStyle = {};
              
              if (isScrollAnimating && scrollDirection) {
                if (scrollDirection === 'up' && visibleIndex === 0) {
                  animationClass = styles.badgeEntering;
                } else if (scrollDirection === 'down' && visibleIndex === visibleCount - 1) {
                  animationClass = styles.badgeEntering;
                } else if (previousPosition !== undefined && previousPosition !== currentPosition) {
                  // Only animate middle elements (skip first and last)
                  if (visibleIndex !== 0 && visibleIndex !== visibleCount - 1) {
                    animationClass = styles.badgeTransitioning;
                    // Calculate the exact position difference for smooth animation
                    const positionDifference = (previousPosition - currentPosition) * 60; // 60px gap between badges
                    wrapperStyle = {
                      '--start-position': `${positionDifference}px`,
                      '--end-position': '0px',
                      '--start-rotation': `${rotations[previousPosition] || 0}deg`,
                      '--end-rotation': `${rotation}deg`,
                    };
                  }
                }
              }

              return (
                <div 
                  key={`wrapper-${badge.text}-${visibleIndex}-${animationTrigger}`} 
                  className={animationClass}
                  style={wrapperStyle}
                >
                  <BadgeTag
                    key={`${badge.text}-${visibleIndex}-${animationTrigger}`}
                    text={badge.text}
                    rotation={rotation}
                    positionIndex={visibleIndex}
                    isSelected={selectedBadge === index}
                    onClick={
                      isClickable ? () => handleBadgeClick(index) : undefined
                    }
                  />
                </div>
              );
            })}
          </div>
          {/* Flecha abajo */}
          <button
            onClick={() => {
              if (isScrollAnimating) return;
              setIsScrollAnimating(true);
              setScrollDirection('down');
              // Capturar posiciones ANTES de cambiar el offset
              const currentPositions: { [key: string]: number } = {};
              Array.from({ length: visibleCount }).forEach((_, visibleIndex) => {
                const index = (badgeOffset + visibleIndex) % badges.length;
                const badge = badges[index];
                const badgeKey = `${badge.text}-${index}`;
                currentPositions[badgeKey] = visibleIndex;
              });
              setPreviousPositions(currentPositions);
              
              setBadgeOffset((prev) => (prev - 1 + badges.length) % badges.length);
              setAnimationTrigger(prev => prev + 1);
              setTimeout(() => {
                setIsScrollAnimating(false);
                setScrollDirection(null);
              }, 400);
            }}
            className={`${styles.navButton} ${styles.downButton}`}
            aria-label="Ver siguientes"
            disabled={isScrollAnimating}
          >
            <Image
              src="/arrow.svg"
              alt="Flecha abajo"
              width={100}
              height={50}
              style={{ filter: "invert(1)", rotate: "90deg" }}
              
            />
          </button>

          {/* Contenedor para la información del proyecto */}
          <div className={styles.projectInfoPanel}>
            {selectedBadge !== null ? (
              <div
                className={`${styles.projectContent} ${
                  isAnimating ? styles.fadeOut : styles.fadeIn
                }`}
              >
                <h2 className={styles.projectTitle}>TITLE</h2>
                <hr className={styles.mediumHR} />
                <p className={styles.projectDescription}>
                  {projects[selectedBadge].title}
                </p>
                <hr className={styles.mediumHR} />
                <hr className={styles.bigHR} />
                <h2 className={styles.projectTitle}>Technologies</h2>
                <hr className={styles.mediumHR} />
                <p className={styles.projectDescription}>
                  {projects[selectedBadge].technologies.join(", ")}
                </p>
                <hr className={styles.mediumHR} />
                <hr className={styles.bigHR} />
              </div>
            ) : (
              <div
                className={`${styles.projectContent} ${
                  isAnimating ? styles.fadeOut : styles.fadeIn
                }`}
              >
                <h2 className={styles.projectTitle}>Select a project</h2>
                <hr className={styles.mediumHR} />
                <p className={styles.projectDescription}>
                  Click on a badge to view project details
                </p>
                <hr className={styles.mediumHR} />
                <hr className={styles.bigHR} />
              </div>
            )}
          </div>

          {/* Contenedor para las imagenes del proyecto */}
          <div className={styles.projectImagesContainer}>
            {selectedBadge !== null && (
              <div className={styles.projectImages}>
                {projects[selectedBadge].imgs.map((img, index) => (
                  <Image
                    key={index}
                    src={img}
                    width={768}
                    height={576}
                    alt={`Project Image ${index + 1}`}
                    className={`${styles.projectImage} ${
                      styles.projectImageAnimated
                    } ${isAnimating ? styles.fadeOut : styles.fadeIn}`}
                    loading="lazy"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Contenedor para la descripción del proyecto */}
          <div className={styles.projectDescriptionContainer}>
            {selectedBadge !== null && (
              <div
                className={`${styles.projectDescriptionText} ${
                  styles.projectDescriptionAnimated
                } ${isAnimating ? styles.fadeOut : styles.fadeIn}`}
              >
                <p>{projects[selectedBadge].description}</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <footer>
        <div className={styles.footer}>
          <p>&copy; 2025 Hector Yoav Ugarte Ramirez</p>
          <p className={styles.footerDisclaimer}>
            This site is a personal project inspired by <em>Persona 5</em>. All
            rights to original elements belong to ATLUS/SEGA.
          </p>
        </div>
      </footer>
    </div>
  );
}
