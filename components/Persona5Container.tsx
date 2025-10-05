import React from 'react';

interface Persona5ContainerProps {
  // Textos
  title: string;
  subtitle: string;
  
  // Configuración de clipPath (opcional)
  blackClipPath?: string;
  redClipPath?: string;
  
  // Configuración de transformaciones
  blackTransform?: string;
  redTransform?: string;
  containerRotation?: string;
  
  // Configuración de posicionamiento del texto principal
  titlePosition?: {
    top: string;
    left: string;
  };
  
  // Configuración de posicionamiento del subtítulo
  subtitlePosition?: {
    top: string;
    left: string;
  };
  
  // Configuración de rotación de textos
  titleRotation?: string;
  subtitleRotation?: string;
  subtitleContainerRotation?: string;
  
  // Configuración de tamaños de fuente
  titleFontSize?: string;
  subtitleFontSize?: string;
}

const Persona5Container: React.FC<Persona5ContainerProps> = ({
  title,
  subtitle,
  blackClipPath = "polygon(0% 39%, 99% 17%, 100% 35%, 0 42%)",
  redClipPath = "polygon(0 37%, 100% 23%, 100% 35%, 0 42%)",
  blackTransform = "translateX(30%) translateY(0%)",
  redTransform = "translateX(40%) translateY(4%)",
  containerRotation,
  titlePosition = { top: "30%", left: "75%" },
  subtitlePosition = { top: "36%", left: "129%" },
  titleRotation = "rotate(-11deg)",
  subtitleRotation = "rotate(-5deg)",
  subtitleContainerRotation,
  titleFontSize = "5.5rem",
  subtitleFontSize = "3rem",
}) => {
  return (
    <>
      {/* Div con fondo negro en forma de polígono/rectángulo con punto focal central */}
      <div
        className="absolute flex items-center justify-center bg-black w-full h-full"
        style={{
          zIndex: 1,
          clipPath: blackClipPath,
          transform: blackTransform,
          rotate: containerRotation,
        }}
      >
        <div
          className="transform perspective-1000 absolute"
          style={{
            top: titlePosition.top,
            left: titlePosition.left,
            transform: "translate(-50%, -50%)",
          }}
        >
          <h2
            className="text-white font-bold tracking-widest"
            style={{
              fontFamily: "p5hatty",
              fontSize: titleFontSize,
              textShadow: "0 0 20px rgba(230, 0, 18, 0.5)",
              transform: titleRotation,
            }}
          >
            {title}
          </h2>
        </div>
      </div>
      
      {/* Segundo container con fondo rojo - capa debajo del negro */}
      <div
        className="absolute flex items-center justify-center w-full h-full"
        style={{
          zIndex: 0,
          backgroundColor: "#E60012",
          clipPath: redClipPath,
          transform: redTransform,
          rotate: containerRotation,
        }}
      />
      
      {/* Subtítulo - capa independiente por encima */}
      <div
        className="absolute w-full h-full"
        style={{
          zIndex: 10,
        }}
      >
        <div
          className="transform perspective-1000 absolute w-full"
          style={{
            top: subtitlePosition.top,
            left: subtitlePosition.left,
            transform: "translate(-50%, -50%)",
            rotate: subtitleContainerRotation,
          }}
        >
          <h2
            className="text-white font-bold tracking-widest"
            style={{
              fontFamily: "p5hatty",
              fontSize: subtitleFontSize,
              textShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
              transform: subtitleRotation,
              WebkitTextStroke: "1px black",
            }}
          >
            {subtitle}
          </h2>
        </div>
      </div>
    </>
  );
};

export default Persona5Container;