import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./MemoryCard.css";
import { useDispatch, useSelector } from "react-redux";
import { CardType } from "../redux/initialState";
import { flipCard } from "../redux/cardSlice";
import { RootState } from "../redux/store";

interface Props {
  framework: CardType,
  flippedCounter: number
}

const MemoryCard: React.FC <Props> = ({framework, flippedCounter}) => {
  const dispatch = useDispatch();

  const handleFlip = () => {
    if (flippedCounter < 2 && !framework.flipped && !framework.matched) {
      dispatch(flipCard(framework.id));
    }
  }

  return <Col className="d-flex">
  <Card className={`memoryCard border-0 ${framework.flipped || framework.matched ? "memoryCard-flipped" : ""}`} onClick={handleFlip} >
    <div className="card-inner">
      <div className="card-front d-flex justify-content-center align-items-center">
        ?
      </div>
      <div className="card-back d-flex justify-content-center">
        <img className="p-4" src={"https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/" + framework.title + ".png"} alt="" />
      </div>
    </div>
  </Card>
  </Col>
};

export default MemoryCard;
