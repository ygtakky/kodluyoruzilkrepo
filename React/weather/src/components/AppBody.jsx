import { Consumer } from "Context";
import WeatherCard from "./WeatherCard";

const AppBody = () => {

  return (
    <Consumer>
      {({ data, currentDay }) => {
        return (
          <div className="app__body">
            <div className="app__body__container">
              {data.forecast && data.forecast.forecastday.map((item, index) => (
                <WeatherCard key={index} data={item} currentDay={currentDay} />
              ))}
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};

export default AppBody;
