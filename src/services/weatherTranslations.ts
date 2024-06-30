// メモ：API元の公式を元に作成（https://openweathermap.org/weather-conditions）
export const weatherTranslations: { [key: string]: string } = {
  // Thunderstorm
  "thunderstorm with light rain": "雷雨と小雨",
  "thunderstorm with rain": "雷雨と雨",
  "thunderstorm with heavy rain": "雷雨と激しい雨",
  "light thunderstorm": "弱い雷雨",
  "thunderstorm": "雷雨",
  "heavy thunderstorm": "激しい雷雨",
  "ragged thunderstorm": "不規則な雷雨",
  "thunderstorm with light drizzle": "雷雨と小霧雨",
  "thunderstorm with drizzle": "雷雨と霧雨",
  "thunderstorm with heavy drizzle": "雷雨と強い霧雨",

  // Drizzle
  "light intensity drizzle": "弱い霧雨",
  "drizzle": "霧雨",
  "heavy intensity drizzle": "強い霧雨",
  "light intensity drizzle rain": "弱い霧雨の雨",
  "drizzle rain": "霧雨の雨",
  "heavy intensity drizzle rain": "強い霧雨の雨",
  "shower rain and drizzle": "にわか雨と霧雨",
  "heavy shower rain and drizzle": "強いにわか雨と霧雨",
  "shower drizzle": "霧雨のにわか雨",

  // Rain
  "light rain": "小雨",
  "moderate rain": "弱い雨",
  "heavy intensity rain": "強い雨",
  "very heavy rain": "激しい雨",
  "extreme rain": "非常に激しい雨",
  "freezing rain": "氷雨",
  "light intensity shower rain": "弱いにわか雨",
  "shower rain": "にわか雨",
  "heavy intensity shower rain": "強いにわか雨",
  "ragged shower rain": "不規則なにわか雨",

  // Snow
  "light snow": "小雪",
  "snow": "雪",
  "heavy snow": "大雪",
  "sleet": "みぞれ",
  "light shower sleet": "小みぞれ",
  "shower sleet": "みぞれのにわか雨",
  "light rain and snow": "小雨と雪",
  "rain and snow": "雨と雪",
  "light shower snow": "小雪のにわか雨",
  "shower snow": "雪のにわか雨",
  "heavy shower snow": "強い雪のにわか雨",

  // Atmosphere
  "mist": "霧",
  "smoke": "煙霧",
  "haze": "もや",
  "dust": "砂埃",
  "fog": "濃霧",
  "sand": "砂嵐",
  "ash": "火山灰",
  "squall": "スコール",
  "tornado": "竜巻",

  // Clear
  "clear sky": "快晴",

  // Clouds
  "few clouds": "晴れ時々曇り",
  "scattered clouds": "曇り",
  "broken clouds": "曇りがち",
  "overcast clouds": "曇天"
};
