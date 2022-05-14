import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import CountUpAnimation from "./CountAnimation";

type Data = {
  title: string;
  value: number;
  description: string;
  color: string;
};

type Props = {
  data: Data;
};

const DataCard = ({ data }: Props) => {
  const lastUpdate = useSelector((state: RootState) => state.data.lastUpdate);
  const update = new Date(lastUpdate).toDateString();

  return (
    <div className={`data__card data__card--${data.color} `}>
      <div className="card__header">
        <h4>{data.title}</h4>
      </div>
      <div className="card__body">
        <h4 className="card__value">
          <CountUpAnimation>{data.value.toString()}</CountUpAnimation>
        </h4>
        <div className="card__body__info">
          <h4>Last Updated at : </h4>
          <div>{update}</div>
          <div className="body__description">{data.description}</div>
        </div>
      </div>
    </div>
  );
};

export default DataCard;
