import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { getCountries, getData } from "./redux/dataSlice";
import { AppDispatch } from "./redux/store";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getData("Global"));
    dispatch(getCountries());
  }, []);

  return (
    <div className="app">
      <div className="app__container">
        <Header />
        <Body />
      </div>
    </div>
  );
}

export default App;
