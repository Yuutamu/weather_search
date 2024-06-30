const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
    deg: number;
  };
}

export const getWeather = async (city: string): Promise<WeatherData> => {
  const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('該当する都市のデータが取得できませんでした。');
      } else {
        throw new Error();
      }
    }

  const data = await response.json();

  return data;
};
