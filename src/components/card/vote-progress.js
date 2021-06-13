import React from "react";
import "./vote-progress.scss";
import thumpUp from "assets/img/thumbs-up.svg";
import thumpDown from "assets/img/thumbs-down.svg";

const VoteProgress = ({ votes }) => {
  const totalVotes = votes.positive + votes.negative;

  const getPercentage = (vote) => ((vote * 100) / totalVotes).toFixed(0);

  const percentagePositive = getPercentage(votes.positive);
  const percentageNegative = getPercentage(votes.negative);

  return (
    <div className="vote-progress">
      <div className="vote-progress__container">
        <div className="vote-progress__container-up">
          <img src={thumpUp} alt="thumbs up" />{" "}
          <span>{percentagePositive} %</span>
        </div>
        <div className="vote-progress__container-down">
          <span>{percentageNegative} %</span>
          <img src={thumpDown} alt="thumbs down" />
        </div>
        <span
          style={{ width: `${percentagePositive}%` }}
          className="progress-up"
        />
        <span
          style={{ width: `${percentageNegative}%` }}
          className="progress-down"
        />
      </div>
    </div>
  );
};

export default VoteProgress;
