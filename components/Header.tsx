"use client";

import { useState, useEffect, useRef } from "react";
import "./Header.css";

interface HeaderProps {
  onMenuClick: (id: number | null) => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
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

  const menuItems = [
    { id: 0, label: "Home" },
    { id: 1, label: "My Projects" },
    { id: 2, label: "Experience" },
    { id: 3, label: "About Me" },
  ];

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
      <header className={`fixed top-0 left-0 z-50 p-6`}>
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
          <nav
            className="absolute top-full left-6 mt-2 rounded-lg shadow-lg header-container"
            style={{ fontFamily: "p5hatty", fontSize: "1.5rem" }}
          >
            <ul ref={navRef} className="relative">
              {hoverPosition && (
                <div className="slide-in delay-4">
                  <div
                    className="red-hover rotate-infinite"
                    style={{
                      position: "absolute",
                      zIndex: 2,
                      backgroundColor: "red",
                      width: "80%",
                      minHeight: "1.7rem",
                      top: hoverPosition.top + 15,
                      left: "10%",
                      transition: "all 0.3s ease",
                      pointerEvents: "none",
                    }}
                  ></div>
                </div>
              )}
              {menuItems.map((item, index) => (
                <div
                  className="slide-in delay-4"
                  style={{
                    zIndex: 10,
                    position: "absolute",
                    left: "40%",
                    top: index * 50 + 20,
                    textAlign: "center",
                    width: "80%",
                    transform: "translateX(-35%)",
                    fontWeight: "bold",
                    pointerEvents: "none",
                  }}
                >
                  {item.label}
                </div>
              ))}
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`text-center ${
                    isMenuOpen ? `slide-in delay-${index + 1}` : ""
                  }`}
                  onMouseEnter={(e) => handleMouseEnter(index, e)}
                  style={{ position: "relative", zIndex: 1 }}
                >
                  <a
                    href={
                      index === 0
                        ? "#"
                        : `#${item.label.replace(/\s+/g, "-").toLowerCase()}`
                    } // Primer elemento redirige a "/"
                    className="block"
                    onClick={() => {
                      onMenuClick(item.id === 0 ? null : item.id); // Llama a la función para expandir el contenedor
                      toggleMenu(); // Cierra el menú
                    }}
                  >
                    <div
                      className={`bg-white p-3 deformidad-${index + 1}`}
                      style={{ position: "relative", zIndex: 1 }}
                    >
                      <div
                        className={`bg-black py-6 contenedor-deformidad-${
                          index + 1
                        }`}
                        style={{ position: "relative", zIndex: 1 }}
                      ></div>
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
