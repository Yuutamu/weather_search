const API_KEY = '9fe78233457b1c320fcc3ac3a6f42c38'; // OpenWeatherMapのAPIキーをここに入力
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

  console.log(data); // メモ：取得JSON。後で消す

  return data;
};
