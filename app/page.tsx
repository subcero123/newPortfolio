"use client";
import type React from "react";
import Image from "next/image";
import { Heart, Spade } from "lucide-react";
import Header from "../components/Header";
import PersonaButton from "../components/PersonaButton";
import SocialButtons from "../components/SocialButtons";
import Persona3DContainer from "../components/Persona3DContainer";
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
}> = ({ letter, rotation, isRed, isH, isSpace, isTor }) => (
  <div
    className={styles.letterContainer}
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
        {isSpace ? (
          <span className={styles.space}></span>
        ) : (
          <span className={styles.letter}>{letter}</span>
        )}
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
}> = ({
  text,
  rotations,
  redIndices = [],
  hIndices = [],
  spaceIndices = [],
  torIndices = [],
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
        <Header onMenuClick={handleToggleExpand} />
        <div className="w-full h-[10vh] relative overflow-hidden">
          <Image
            src={"/header-bg.webp"}
            alt="Imagen de encabezado"
            layout="fill"
          />
        </div>
        <div
          className="relative h-[72vh] flex"
          style={{ maxWidth: "1440px", width: "100%", alignSelf: "center" }}
        >
          {!isMobile && (
            <div
              className="relative w-1/3 imagen-contorno"
              style={{
                position: "absolute",
                bottom: "-10%",
              }}
            >
              <Image
                src="/me2.webp"
                alt="Contorno"
                layout="fill"
                className="animated-image"
              />
            </div>
          )}
          <div
            className={`relative z-10 flex flex-col items-center justify-center h-full text-center px-4 ${
              isMobile ? "w-full" : "w-2/3 ml-auto"
            }`}
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
            >
              <div>
                {"FULLSTACK".split("").map((letter, index) => (
                  <span
                    key={index}
                    className={[
                      index === 0 || index === 4
                        ? p5Styles.redText
                        : p5Styles.whiteText,
                    ].join(" ")}
                  >
                    {letter}
                  </span>
                ))}
              </div>
              <div>
                {"DEVELOPER".split("").map((letter, index) => (
                  <span
                    key={index}
                    className={[
                      index === 0 || index === 6
                        ? p5Styles.redText
                        : p5Styles.whiteText,
                    ].join(" ")}
                  >
                    {letter}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <main className="w-full h-screen relative">
          <img
            src={`/projects-bg.webp`}
            alt="Background"
            className="absolute left-0 w-full h-full"
            style={{ top: "-2%" }}
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
              <AboutMeComponent/>
            </Persona3DContainer>
          </div>
        </main>
      </div>
      <footer>
        <div className="bg-black text-white text-center py-4">
          <p>&copy; 2025 Hector Yoav Ugarte Ramirez</p>
            <p style={{ fontSize: "0.75rem" }}>
            Special thanks to Ulises Solano for contributing.
            </p>
        </div>
      </footer>
    </div>
  );
}
