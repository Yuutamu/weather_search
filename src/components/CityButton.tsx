import React from 'react';

interface CityButtonProps {
  city: string;
  onClick: (city: string) => void;
}

const CityButton: React.FC<CityButtonProps> = ({ city, onClick }) => {
  return (
    <button onClick={() => onClick(city)}>
      {city}
    </button>
  );
};

export default CityButton;
