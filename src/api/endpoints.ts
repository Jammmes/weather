import { APPID } from '@/constants/app';

export const GET_WEATHER_BY_CITY_NAME = (cityName: string) => `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${APPID}&units=metric`;
export const GET_WEATHER_ICON = (name: string) => `http://openweathermap.org/img/wn/${name}@2x.png`;
