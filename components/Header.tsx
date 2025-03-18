"use client";

import { useState, useEffect } from "react";
import './Header.css';

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
          <nav className={`absolute top-full left-6 mt-2 rounded-lg shadow-lg w-96`}>
            <ul>
              {['Inicio', 'Proyectos', 'Sobre mí', 'Contacto'].map((item, index) => (
                <li key={index} className={`text-center ${isMenuOpen ? `slide-in delay-${index + 1}` : ''}`}>
                  <div className={`bg-white p-3 deformidad-${index + 1} `}>
                    <div className={`bg-black py-10 contenedor-deformidad-${index + 1}`}>
                      <a href="#" className="text-white hover:text-gray-300 letter">{item}</a>
                    </div>
                  </div>
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
