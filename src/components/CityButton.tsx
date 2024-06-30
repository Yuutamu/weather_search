import React from 'react';

interface CityButtonProps {
  city: string;
  onClick: (city: string) => void;
  translateCity: (city: string) => string;
}

const CityButton: React.FC<CityButtonProps> = ({ city, onClick, translateCity }) => {
  return (
    <button onClick={() => onClick(city)}>
      {translateCity(city)}
    </button>
  );
};

export default CityButton;
