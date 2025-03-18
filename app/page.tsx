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

const RotatedLetter: React.FC<{
  letter: string;
  rotation: number;
  isRed?: boolean;
  isH?: boolean;
  isMiddle?: boolean;
  isSpace?: boolean;
  isTor?: boolean;
}> = ({ letter, rotation, isRed, isH, isMiddle, isSpace, isTor }) => (
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
        ) : isSpace ? (
          <Spade size={24} fill="white" className={styles.icon} />
        ) : (
          <>
            <span className={styles.letter}>{letter}</span>
            {isMiddle && (
              <Heart
                className={`${styles.heartIcon} ${styles.icon}`}
                size={16}
                fill="#e60012"
                stroke="#e60012"
              />
            )}
          </>
        )}
      </div>
      <div
        className={`${styles.letterBack} ${isTor ? styles.torBack : ""}`}
        style={{
          color: isTor ? "white" : "black",
        }}
      >
        {isSpace ? (
          <Spade
            size={24}
            fill={isTor ? "white" : "black"}
            className={styles.icon}
          />
        ) : (
          <>
            <span className={styles.letter}>{letter}</span>
            {isMiddle && (
              <Heart
                className={`${styles.heartIcon} ${styles.icon}`}
                size={16}
                fill={isTor ? "white" : "black"}
                stroke={isTor ? "white" : "black"}
              />
            )}
          </>
        )}
      </div>
    </div>
  </div>
);

export default function Home() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nameLetters = "HECTOR UGARTE".split("");
  const rotations = nameLetters.map((_, index) => {
    const baseRotation = 5;
    return index % 2 === 0 ? baseRotation : -baseRotation;
  });

  return (
    <div className="min-h-screen text-white">
      <div
        className="relative bg-cover bg-center w-full fixed top-0 left-0 z-0"
        style={{
          backgroundImage: 'url("/new-hero-png.webp")',
          height: "110vh",
          backgroundPositionY: `${offsetY * 0.5}px`, // Parallax effect
        }}
      >
        <div
          className="absolute inset-0 bg-black opacity-70"
          style={{ zIndex: -1 }}
        ></div>
        <Header />
        <div className="w-full h-[10vh] relative overflow-hidden">
          <Image
            src="/header-bg.png"
            alt="Imagen de encabezado"
            layout="fill"
          />
        </div>
        <div className="relative h-[72vh]">
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <h1
              className="mb-2 tracking-widest"
              style={{
                fontSize: "4.5rem",
                fontWeight: "1000",
                letterSpacing: "0.08em",
                lineHeight: "1.2",
                position: "relative",
              }}
            >
              {nameLetters.map((letter, index) => (
                <RotatedLetter
                  key={index}
                  letter={letter}
                  rotation={rotations[index]}
                  isRed={(index === 3 || index === 11) && letter !== " "}
                  isH={index === 0}
                  isMiddle={index === 4}
                  isSpace={letter === " "}
                  isTor={index >= 3 && index <= 5}
                />
              ))}
            </h1>
            <PersonaButton
              text="SCHEDULE"
              onClick={() => console.log("Button clicked")}
            />
            <SocialButtons />
          </div>
        </div>

        <div className={p5Styles.persona5Text}>
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
                  index === 0 || index === 4
                    ? p5Styles.redText
                    : p5Styles.whiteText,
                ].join(" ")}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>
        <main className="w-full h-screen relative">
          <img
            src="/projects-bg.png"
            alt="Background"
            className="absolute left-0 w-full h-full"
            style={{ top: "-2%" }}
          />
          <div className="relative flex flex-col justify-center h-full" style={{ top: "-3%" }}>
            <Persona3DContainer
              title="My Projects"
              description="I have worked on a variety of projects. Here are some of my most recent projects."
            >
              <ProjectsComponent />
            </Persona3DContainer>
            <Persona3DContainer
              title="Experience"
              description="Professional experience and education."
              isLeft={true}
            />
            <div className="p-5"></div>
            <Persona3DContainer
              title="About Me"
              description="I am a Fullstack Developer with a passion for creating beautiful and functional applications."
            />
          </div>
        </main>
      </div>
    </div>
  );
}
