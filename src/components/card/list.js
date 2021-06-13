import React from "react";
import { Thumb, Button } from "components";
import "./list.scss";
import VoteProgress from "./vote-progress";

const List = ({ data }) => {
  return (
    <div className="card-list">
      <img
        className="card-list__background"
        src={`/images/${data.picture}`}
        alt={data.name}
      />
      <div className="card-list__container">
        <Thumb />
        <div>
          <div className="card-list__container-title">
            <h1>{data.name}</h1>
            <p>{data.description}</p>
          </div>
          <div className="card-list__container-vote">
            <p>1 month ago in Entertainment</p>
            <div>
              <Thumb type="up" />
              <Thumb type="down" />
              <Button>Votar ahora</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="card-list__progress">
        <VoteProgress />
      </div>
    </div>
  );
};

export default List;
