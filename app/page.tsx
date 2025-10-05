"use client";
import type React from "react";
import Image from "next/image";
import { Heart, Spade } from "lucide-react";
import Header from "../components/Header";
import PersonaButton from "../components/PersonaButton";
import SocialButtons from "../components/SocialButtons";
import Persona3DContainer from "../components/Persona3DContainer";
import Persona5Container from "../components/Persona5Container";
import SimplePersonaContainer from "../components/SimplePersonaContainer";
import styles from "../styles/RotatedLetter.module.css";
import p5Styles from "../styles/Persona5Text.module.css";
import { useEffect, useState } from "react";
import ProjectsComponent from "@/components/ProjectsComponent/ProjectsComponent";
import ExperienceComponent from "@/components/ExperienceComponent/ExperienceComponent";
import AboutMeComponent from "@/components/AboutMeComponent/AboutMeComponent";

const RotatedLetter: React.FC<{
  letter: string;
  rotation: number;
  isRed?: boolean;
  isH?: boolean;
  isSpace?: boolean;
  isTor?: boolean;
  isFlipped?: boolean;
}> = ({ letter, rotation, isRed, isH, isSpace, isTor, isFlipped }) => (
  <div
    className={styles.letterContainer + (isFlipped ? " " + styles.flipped : "")}
    style={{ transform: `rotate(${rotation}deg)` }}
  >
    <div className={styles.letterInner}>
      <div
        className={`${styles.letterFront} ${isTor ? styles.torFront : ""}`}
        style={{
          backgroundColor: "black",
          color: isRed || isTor ? "#e60012" : "white",
        }}
      >
        {isH ? (
          <div className={styles.hContainer}>
            <span>{letter}</span>
          </div>
        ) : (
          <span className={styles.letter}>{letter}</span>
        )}
      </div>
      <div
        className={`${styles.letterBack} ${isTor ? styles.torBack : ""}`}
        style={{
          color: isTor ? "white" : "black",
        }}
      >
        <span className={styles.letter}>{letter}</span>
      </div>
    </div>
  </div>
);

const RotatedLetterGrid: React.FC<{
  text: string;
  rotations: number[];
  redIndices?: number[];
  hIndices?: number[];
  spaceIndices?: number[];
  torIndices?: number[];
  flippedIndex?: number;
}> = ({
  text,
  rotations,
  redIndices = [],
  hIndices = [],
  spaceIndices = [],
  torIndices = [],
  flippedIndex,
}) => {
  const topRow = text.slice(0, 6).split("");
  const bottomRow = text.slice(6, 12).split("");

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-2">
        {topRow.map((letter, i) => (
          <RotatedLetter
            key={i}
            letter={letter}
            rotation={rotations[i]}
            isRed={redIndices.includes(i)}
            isH={hIndices.includes(i)}
            isSpace={spaceIndices.includes(i)}
            isTor={torIndices.includes(i)}
            isFlipped={flippedIndex === i}
          />
        ))}
      </div>
      <div className="flex gap-2">
        {bottomRow.map((letter, i) => (
          <RotatedLetter
            key={i + 6}
            letter={letter}
            rotation={rotations[i + 6]}
            isRed={redIndices.includes(i + 6)}
            isH={hIndices.includes(i + 6)}
            isSpace={spaceIndices.includes(i + 6)}
            isTor={torIndices.includes(i + 6)}
            isFlipped={flippedIndex === i + 6}
          />
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Verificar si estamos en el cliente antes de acceder a window
    if (typeof window !== "undefined") {
      const handleScroll = () => setOffsetY(window.scrollY);
      window.addEventListener("scroll", handleScroll);

      // Verificar si es móvil
      setIsMobile(window.innerWidth < 768);

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleToggleExpand = (id: number | null) => {
    setExpandedId(expandedId === id ? null : id); // Alterna entre expandir y colapsar
  };

  const nameLetters = isMobile ? "YOAV".split("") : "HECTORUGARTE".split("");
  const rotations = nameLetters.map((_, index) => {
    const baseRotation = 5;
    return index % 2 === 0 ? baseRotation : -baseRotation;
  });

  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const nameLength = isMobile ? 4 : 12;
      const randomIndex = Math.floor(Math.random() * nameLength);
      setFlippedIndex(randomIndex);
      setTimeout(() => setFlippedIndex(null), 1500); // tiempo de animación
    }, 8000); // Cambiado a 5 segundos
    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <div className="min-h-screen text-white">
      <div
        className="relative bg-cover bg-center w-full fixed top-0 left-0 z-0"
        style={{
          backgroundImage: `url(/hero-bg.webp)`,
          backgroundPositionY: `${offsetY * 0.5}px`, // Parallax effect
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className="absolute inset-0 bg-black opacity-50"
          style={{ zIndex: -1 }}
        ></div>
        <Header
          onMenuClick={(id: number | null) =>
            id !== 1 && handleToggleExpand(id)
          }
        />
        <div className="w-full h-[10vh] relative overflow-hidden">
          <Image
            src={"/header-bg.webp"}
            alt="Imagen de encabezado"
            layout="fill"
          />
        </div>
        <div
          className="relative h-[72vh] flex"
          style={{ maxWidth: "1440px", width: "100%", alignSelf: "flex-end" }}
        >
          {!isMobile && (
            <div
              className="relative w-1/3 imagen-contorno"
              style={{
                position: "absolute",
                bottom: "-10%",
              }}
            >
              {/* Primer container Persona 5 */}
              <Persona5Container 
                title="HECTOR" 
                subtitle="UGARTE RAMIREZ"
                specialLetterIndices={[2]} 
              />
              {/* Segundo container Persona 5 */}
              <Persona5Container
                title="FULLSTACK"
                subtitle="DEVELOPER"
                blackClipPath="polygon(31% 31%, 100% 20%, 100% 35%, 24% 37%)"
                blackTransform="translateX(30%) translateY(15%)"
                redTransform="translateX(40%) translateY(18%)"
                containerRotation="15deg"
                specialLetterIndices={[5]} 
                titlePosition={{ top: "31%", left: "73%" }}
                subtitlePosition={{ top: "85%", left: "130%" }}
                titleRotation="rotate(-4deg)"
                titleFontSize="4rem"
                subtitleContainerRotation="15deg"
              />
              {/* Container CONTACT - REACH ME usando componente */}
              <SimplePersonaContainer title="CONTACT" subtitle="REACH ME" 
              specialLetterIndices={[2]}
              />

              {/* Container PROJECTS - MY PROJECTS */}
              <SimplePersonaContainer
                title="PROJECTS"
                subtitle="MY PROJECTS"
                transform="translateX(-35%) translateY(1%)"
                clipPath="polygon(17% 21%, 62% 32%, 62% 39%, 17% 34%)"
                containerRotation="-15deg"
                titlePosition={{ top: "33%", left: "41%" }}
                subtitlePosition={{ top: "47%", left: "39%" }}
                titleRotation="rotate(9deg)"
                subtitleRotation="rotate(-6deg)"
                titleFontSize="4.5rem"
                specialLetterIndices={[4]}
              />

              {/* Container EXPERIENCE - CAREER PATH */}
              <SimplePersonaContainer
                title="EXPERIENCE"
                subtitle="CAREER PATH"
                clipPath="polygon(17% 21%, 59% 28%, 57% 38%, 14% 35%)"
                transform="translateX(-35%) translateY(20%)"
                containerRotation="-15deg"
                titlePosition={{ top: "31%", left: "38%" }}
                subtitlePosition={{ top: "63%", left: "39%" }}
                titleRotation="rotate(6deg)"
                subtitleRotation="rotate(-10deg)"
                titleFontSize="3.2rem"
                specialLetterIndices={[1]}
              />

              <Image
                src="/me-2.png"
                alt="Contorno"
                layout="fill"
                className="animated-image"
                style={{ zIndex: 2 }}
              />
            </div>
          )}
          <div
            className={`relative z-10 flex flex-col items-center justify-center h-full text-center px-4 ${
              isMobile ? "w-full" : "w-2/3 ml-auto"
            }`}
            style={{ display: "none" }} //POR AHORA
          >
            <h1
              className="mb-2 tracking-widest persona5-text"
              style={{
                fontWeight: "1000",
              }}
            >
              <RotatedLetterGrid
                text={nameLetters.join("")}
                rotations={[0, 5, -5, 10, -10, 15, 0, -15, 5, -5, 10, -10]}
                redIndices={[1, 10]}
                hIndices={[0, 6]}
                spaceIndices={[5]}
                torIndices={[11]}
                flippedIndex={flippedIndex ?? undefined}
              />
            </h1>
            <PersonaButton
              text="SCHEDULE"
              onClick={() => open("https://calendly.com/hector_ugarter/30min")}
            />
            <SocialButtons />
            <div
              className={p5Styles.persona5Text}
              style={{ fontFamily: "p5hatty" }}
            ></div>
          </div>
        </div>
        <main className="w-full h-screen relative z-10">
          <img
            src={`/projects-bg.webp`}
            alt="Background"
            className="absolute left-0 w-full h-full"
            style={{ top: "-6%" }}
          />
          <div
            className="relative flex flex-col justify-center h-full"
            style={{ top: "-10%" }}
          >
            <Persona3DContainer
              id={1}
              title="My Projects"
              description="I have worked on a variety of projects. Here are some of my most recent projects."
              isExpanded={expandedId === 1}
              onToggleExpand={() => handleToggleExpand(1)}
            >
              <ProjectsComponent />
            </Persona3DContainer>
            <Persona3DContainer
              id={2}
              title="Experience"
              description=""
              isExpanded={expandedId === 2}
              onToggleExpand={() => handleToggleExpand(2)}
            >
              <ExperienceComponent />
            </Persona3DContainer>
            <Persona3DContainer
              id={3}
              title="About Me"
              description=""
              isExpanded={expandedId === 3}
              onToggleExpand={() => handleToggleExpand(3)}
            >
              <AboutMeComponent />
            </Persona3DContainer>
          </div>
        </main>
      </div>
      <footer>
        <div className="bg-black text-white text-center py-4">
          <p>&copy; 2025 Hector Yoav Ugarte Ramirez</p>
          <p style={{ fontSize: "0.8em", color: "#888" }}>
            This site is a personal project inspired by <em>Persona 5</em>. All
            rights to original elements belong to ATLUS/SEGA.
          </p>
        </div>
      </footer>
    </div>
  );
}
