import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeText,
  selectHelpText,
  selectReadOnly,
  selectText,
} from "../redux/markdownSlice";

function TextInput() {
  const text = useSelector(selectText);
  const helpText = useSelector(selectHelpText);
  const readOnly = useSelector(selectReadOnly);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    dispatch(changeText(e.target.value));
  };

  return (
    <div className="input__container">
      <form className="input__form" onChange={handleChange}>
        <textarea
          className="input"
          id="text"
          value={readOnly ? helpText : text}
          readOnly={readOnly}
        />
      </form>
    </div>
  );
}

export default TextInput;
