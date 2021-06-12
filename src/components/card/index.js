import React from "react";
import "./styles.scss";

const Card = ({ type, data }) => {
  return (
    <div className="card">
      <img
        className="card__background"
        src={`/images/${data.picture}`}
        alt={data.name}
      />
    </div>
  );
};

export default Card;
