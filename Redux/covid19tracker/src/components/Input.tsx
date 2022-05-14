import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, setCurrentCountry } from "../redux/dataSlice";
import { AppDispatch, RootState } from "../redux/store";

type Props = {};

const Input = (props: Props) => {
  const [value, setValue] = useState<string>("");
  const countries = useSelector((state: RootState) => state.data.countries);
  const dispatch = useDispatch<AppDispatch>();

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(getData(e.target.value));
    dispatch(setCurrentCountry(e.target.value));
    setValue(e.target.value);
  };

  return (
    <div className="body__input">
      <select className="body__select" value={value} onChange={handleSelect}>
        <option value="Global">Global</option>
        {countries.map((item) => {
          return (
            <option key={nanoid()} value={item.name}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Input;
