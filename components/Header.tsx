"use client";

import { useState, useEffect, useRef } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  const [hoverIndex, setHoverIndex] = useState<number | null>(null); // Índice del elemento en hover
  const [hoverPosition, setHoverPosition] = useState<{
    top: number;
    left: number;
    width: number;
  } | null>(null); // Posición del hover
  const navRef = useRef<HTMLUListElement>(null); // Referencia al contenedor principal

  const menuItems = ["Home", "My Projects", "Experience", "About Me"];

  const handleMouseEnter = (
    index: number,
    event: React.MouseEvent<HTMLLIElement>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect(); // Obtiene la posición del elemento
    setHoverIndex(index);
    setHoverPosition({
      top: rect.top - (navRef.current?.getBoundingClientRect().top || 0), // Calcula la posición relativa al contenedor
      left: rect.left - (navRef.current?.getBoundingClientRect().left || 0),
      width: rect.width,
    });
  };

  return (
    <>
      <header className={`fixed top-0 left-0 z-50 p-6 `}>
        <button
          onClick={toggleMenu}
          className="menu-button"
          style={{
            backgroundColor: "red",
            border: "5px solid white",
            padding: "10px",
            width: "80px" /* Ancho fijo */,
            height: "60px" /* Altura fija */,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
            transform: "perspective(200px) rotateY(25deg)",
          }}
        >
          {isMenuOpen ? (
            <>
              {/* Icono X desde close.svg */}
              <img width={40} src="close.svg" alt="Close" />
            </>
          ) : (
            <>
              <div
                style={{
                  width: "95%",
                  height: "6px",
                  backgroundColor: "white",
                  boxShadow: "-2px 3px 2px 0px rgba(0,0,0,0.65)",
                }}
              ></div>
              <div
                style={{
                  width: "95%",
                  height: "6px",
                  backgroundColor: "white",
                  boxShadow: "-2px 3px 2px 0px rgba(0,0,0,0.65)",
                }}
              ></div>
              <div
                style={{
                  width: "95%",
                  height: "6px",
                  backgroundColor: "white",
                  boxShadow: "-2px 3px 2px 0px rgba(0,0,0,0.65)",
                }}
              ></div>
            </>
          )}
        </button>

        {isMenuOpen && (
          <nav className="absolute top-full left-6 mt-2 rounded-lg shadow-lg w-96">
            <ul ref={navRef} className="relative">
              {/* Contenedor red-hover */}
              {hoverPosition && (
                <div
                  className="red-hover rotate-infinite"
                  style={{
                    position: "absolute",
                    zIndex: 3, // Se pone detrás del texto pero encima de otros contenedores
                    backgroundColor: "red",
                    width: "80%",
                    minHeight: "1.8rem",
                    top: hoverPosition.top + 20,
                    left: "50%",
                    transform: "translateX(-50%)",
                    transition: "all 0.3s ease",
                  }}
                ></div>
              )}
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`text-center ${
                    isMenuOpen ? `slide-in delay-${index + 1}` : ""
                  }`}
                  onMouseEnter={(e) => handleMouseEnter(index, e)}
                  onMouseLeave={() => setHoverIndex(null)}
                  style={{ position: "relative", zIndex: 2 }} // Mayor que .red-hover
                >
                  <a
                    href={`#${item.replace(/\s+/g, "-").toLowerCase()}`}
                    className="block"
                  >
                    <div
                      className={`bg-white p-3 deformidad-${index + 1}`}
                      style={{ position: "relative"}} // Encima de .red-hover
                    >
                      <div
                        className={`bg-black py-6 contenedor-deformidad-${
                          index + 1
                        }`}
                        style={{ position: "relative"}} // Texto encima de todo
                      >
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}
    </>
  );
};

export default Header;
