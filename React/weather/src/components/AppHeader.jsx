import { Consumer } from "Context";

const AppHeader = (props) => {
  return (
    <Consumer>
      {({ data, handleChange }) => {
        return (
          <div className="app__header">
            <h1 className="app__title">Weather App</h1>
            <div className="app__city__container">
              <form className="app__city-form" onChange={handleChange}>
                <select className="app__city-select" id="city">
                  <option value="">Please select a city</option>
                  <option value="Istanbul">Istanbul</option>
                  <option value="London">London</option>
                  <option value="Paris">Paris</option>
                  <option value="Tokyo">Tokyo</option>
                  <option value="New York">New York</option>
                  <option value="Berlin">Berlin</option>
                </select>
              </form>
              {data.location && (
                <div className="app__city__container__cityName">
                  {data.location.name}
                </div>
              )}
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};

export default AppHeader;
