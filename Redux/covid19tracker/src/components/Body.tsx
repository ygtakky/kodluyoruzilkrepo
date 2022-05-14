import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import DataCard from "./DataCard";
import DataGraph from "./DataGraph";
import Input from "./Input";

type Props = {};

const Body = (props: Props) => {
  const data = useSelector((state: RootState) => state.data.stats);

  return (
    <div className="app__body">
      <div className="body__cards">
        {data.map((item, index) => {
          return <DataCard key={index} data={item} />;
        })}
      </div>
      <Input />
      <DataGraph />
    </div>
  );
};

export default Body;
