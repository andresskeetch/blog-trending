import React from "react";
import { Thumb, Button } from "components";
import "./card.scss";
import VoteProgress from "./vote-progress";

const Card = ({ data }) => {
  return (
    <div className="card">
      <img
        className="card__background"
        src={`/images/${data.picture}`}
        alt={data.name}
      />
      <div className="card__container">
        <div className="card__container-title">
          <Thumb />
          <h1>{data.name}</h1>
        </div>
        <p className="card__container-description">{data.description}</p>
        <p className="card__container-time">1 month ago in Entertainment</p>
        <div className="card__container-vote">
          <Thumb type="up" />
          <Thumb type="down" />
          <Button>Votar ahora</Button>
        </div>
        <VoteProgress />
      </div>
    </div>
  );
};

export default Card;
