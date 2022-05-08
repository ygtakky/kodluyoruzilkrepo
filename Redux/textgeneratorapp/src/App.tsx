import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { AppDispatch, RootState } from "./redux/store";
import { getText } from "./redux/textSlice";

function App() {
  const count = useSelector((state: RootState) => state.text.paragraphCount);
  const HTML = useSelector((state: RootState) => state.text.HTML);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const parameters = { count, HTML };
    dispatch(getText(parameters));
  }, [count, HTML]);

  return (
    <div className="app">
      <div className="container">
        <Header />
        <Body />
      </div>
    </div>
  );
}

export default App;
