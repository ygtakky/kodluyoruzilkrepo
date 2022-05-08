import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

type Props = {};

function Body({}: Props) {
  const text = useSelector((state: RootState) => state.text.text);
  return <div className="app__body">{text}</div>;
}

export default Body;
