import { APIKEY } from '@/constants/app';

export const GET_WEATHER_BY_CITY_NAME = (cityName: string) => `api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${APIKEY}`;
