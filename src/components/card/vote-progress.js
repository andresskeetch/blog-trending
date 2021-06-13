import React from "react";
import "./vote-progress.scss";
import thumpUp from "assets/img/thumbs-up.svg";
import thumpDown from "assets/img/thumbs-down.svg";

const VoteProgress = () => {
  return (
    <div className="vote-progress">
      <div className="vote-progress__container">
        <div className="vote-progress__container-up">
          <img src={thumpUp} alt="thumbs up" /> <span>10 %</span>
        </div>
        <div className="vote-progress__container-down">
          <span>10 %</span>
          <img src={thumpDown} alt="thumbs down" />
        </div>
        <span className="progress-up" />
        <span className="progress-down" />
      </div>
    </div>
  );
};

export default VoteProgress;
