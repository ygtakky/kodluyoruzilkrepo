const WeatherCard = ({ data, currentDay }) => {
  const day = new Date(data.date).toDateString().split(" ")[0];

  return (
    <div
      className={`app__body__content ${currentDay === day ? "current" : ""} `}
    >
      <div className="app__body__content__header">
        <h3 className="app__body__content__title">{day}</h3>
      </div>
      <div className="app__body__content__image">
        <img
          id="weatherIcon"
          src={data.day.condition.icon}
          alt="Weather icon"
        />
      </div>
      <div className="app__body__content__temperatures">
        <div className="app__body__content__temperatures__max">
          <p>{Math.round(data.day.maxtemp_c)}°C</p>
        </div>
        <div className="app__body__content__temperatures__min">
          <p>{Math.round(data.day.mintemp_c)}°C</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
