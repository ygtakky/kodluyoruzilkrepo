import { Provider} from "Context";
import {useState} from "react"
import axios from "axios";
import AppBody from "components/AppBody";
import AppHeader from "components/AppHeader";
import { useEffect } from "react";

export default function App() {
  const [data, setData] = useState({});
  const currentDay = new Date().toDateString().split(" ")[0];

  const APIKey = /* Your API key here for weather api */

  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=${APIKey}&q=Istanbul&days=7&aqi=no&alerts=no`
      )
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [])

  const handleChange = (e) => {
  if (e.target.value !== "") {
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=${APIKey}&q=${e.target.value}&days=7&aqi=no&alerts=no`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  };

  return (
    <Provider value={{data, currentDay, handleChange}}>
      <div id="App">
        <div className="app__container">
          <AppHeader />
          <AppBody />
        </div>
      </div>
    </Provider>
  );
}
