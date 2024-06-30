import React, { useState } from 'react';
import { getWeather, WeatherData } from './services/weatherService';
import { weatherTranslations } from './services/weatherTranslations';
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
      setError('該当する都市のデータは取得できませんでした。');
      setWeather(null);
    }
  };

  // 天気条件の日本語翻訳関数
  const getTranslatedWeather = (weatherCondition: string) => {
    return weatherTranslations[weatherCondition.toLowerCase()] || weatherCondition; // メモ：対応する日本語が無かった場合は元のkey(英語表記)で返す
  };

  // 天気アイコンURLの生成関数
  const getIconUrl = (icon: string) => {
    return `http://openweathermap.org/img/wn/${icon}.png`;
  };

  return (
    <div>
      <h1>Weather App</h1>
      <div>
        {cities.map((city) => (
          <CityButton key={city} city={city} onClick={() => handleCityClick(city)} />
        ))}
      </div>
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>温度: {weather.main.temp}°C</p>
          <p>天気: {getTranslatedWeather(weather.weather[0].description)}</p>
          <p>風速: {weather.wind.speed} m/s</p>
          <p>風向き: {weather.wind.deg}°</p>
          <p>湿度: {weather.main.humidity}%</p>
          <p>
            <img src={getIconUrl(weather.weather[0].icon)} alt={weather.weather[0].description} />
          </p>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default App;
