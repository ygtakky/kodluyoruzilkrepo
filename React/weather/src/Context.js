import { createContext } from "react";

// Create a context for weather data
const WeatherDataContext = createContext({
  data: {},
});

export const { Provider, Consumer } = WeatherDataContext;
