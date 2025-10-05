import React from 'react';

interface SpecialLetterProps {
  letter: string;
  fontSize: string;
  rotation?: string;
}

const SpecialLetter: React.FC<SpecialLetterProps> = ({
  letter,
  fontSize,
  rotation = "0deg",
}) => {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        color: 'black',
        fontFamily: 'p5hatty',
        fontSize: fontSize,
        fontWeight: 'bold',
        padding: '0.45em 0.01em 0.30em 0.10em',
        margin: '0 0.02em',
        transform: rotation,
        textShadow: 'none',
        height: '0.7em',
      }}
    >
      {letter}
    </span>
  );
};

export default SpecialLetter;