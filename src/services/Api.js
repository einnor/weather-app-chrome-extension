import axios from '../plugins/axios';

export default class Api {
  static searchWeather = async (location) => {
    const response = await axios.get(`/weather?q=${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`);
    return response;
  };

  static searchForecast = async (location) => {
    const response = await axios.get(`/forecast?q=${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`);
    return response;
  };
}
