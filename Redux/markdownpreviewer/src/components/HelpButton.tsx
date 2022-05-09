import { useDispatch } from "react-redux";
import { toggleHelp } from "../redux/markdownSlice";

const HelpButton = () => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleHelp());
  };

  return (
    <div>
      <button className="btn" onClick={handleToggle}>
        ?
      </button>
    </div>
  );
};

export default HelpButton;
