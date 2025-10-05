import React from 'react';

interface SimplePersonaContainerProps {
  // Textos
  title: string;
  subtitle: string;
  
  // Configuración del container negro
  clipPath?: string;
  transform?: string;
  containerRotation?: string;
  
  // Configuración de posicionamiento del título
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
  
  // Configuración de tamaños de fuente
  titleFontSize?: string;
  subtitleFontSize?: string;
}

const SimplePersonaContainer: React.FC<SimplePersonaContainerProps> = ({
  title,
  subtitle,
  clipPath = "polygon(21% 22%, 65% 28%, 62% 43%, 17% 36%)",
  transform = "translateX(-45%) translateY(-10%)",
  containerRotation,
  titlePosition = { top: "33%", left: "43%" },
  subtitlePosition = { top: "35%", left: "35%" },
  titleRotation = "rotate(9deg)",
  subtitleRotation = "rotate(8deg)",
  titleFontSize = "4rem",
  subtitleFontSize = "2.5rem",
}) => {
  return (
    <>
      {/* Container negro principal */}
      <div
        className="absolute flex items-center justify-center bg-black w-full h-full"
        style={{
          zIndex: 1,
          clipPath: clipPath,
          transform: transform,
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
      
      {/* Subtítulo - estructura completa */}
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

export default SimplePersonaContainer;