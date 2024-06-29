import React, { useState } from 'react';
import { getWeather, WeatherData } from './services/weatherService';
import CityButton from './components/CityButton';

const cities = ['Tokyo', 'Osaka', 'Nagoya', 'Sapporo', 'Fukuoka', 'Yokohama', 'Kyoto', 'Kobe', 'Sendai', 'Hiroshima'];

const App: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCityClick = async (city: string) => {
    try {
      const data = await getWeather(city);
      setWeather(data);
      setError(null);
    } catch (error) {
      setError('Failed to fetch weather data');
      setWeather(null);
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <div>
        {cities.map((city) => (
          <CityButton key={city} city={city} onClick={handleCityClick} />
        ))}
      </div>
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].main} ({weather.weather[0].description})</p>
          <p>Wind: {weather.wind.speed} m/s, {weather.wind.deg}°</p>
          <p>Humidity: {weather.main.humidity}%</p>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default App;
