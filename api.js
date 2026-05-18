const WEATHER_API = "https://api.open-meteo.com/v1/forecast";
const GEOCODE_API = "https://nominatim.openstreetmap.org/reverse";

const buildWeatherUrl = (lat, lon) => {
  const params = new URLSearchParams({
    latitude: lat,
    longitude: lon,
    current: "temperature_2m,apparent_temperature,weather_code",
    daily: "temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,weather_code,precipitation_probability_max,precipitation_sum",
    timezone: "auto",
    forecast_days: 2,
  });
  return `${WEATHER_API}?${params}`;
};

const buildGeocodeUrl = (lat, lon, lang) => {
  const params = new URLSearchParams({
    lat, lon, format: "json", zoom: 12, "accept-language": lang,
  });
  return `${GEOCODE_API}?${params}`;
};
