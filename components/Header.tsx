"use client"

import { useState } from "react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden"
  }

  return (
    <>
      <header className="fixed top-0 left-0 z-50 p-6">
        <button
          onClick={toggleMenu}
          className="px-4 py-2 text-white bg-gray-800 bg-opacity-75 hover:bg-opacity-100 rounded-full focus:outline-none transition-colors duration-300"
        >
          Menu
        </button>
        {isMenuOpen && (
          <nav className="absolute top-full left-6 mt-2 bg-gray-800 p-4 rounded-lg shadow-lg w-48">
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  Sobre mí
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>
      {isMenuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu} />}
    </>
  )
}

export default Header

