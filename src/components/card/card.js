import React from "react";
import { Thumb, Button } from "components";
import "./card.scss";
import VoteProgress from "./vote-progress";
import ReactTimeAgo from "react-time-ago";

const Card = ({
  data,
  onVote,
  selected,
  setSelected,
  userVoted,
  onVoteAgain,
}) => {
  const { votes } = data;

  return (
    <div className="card">
      <img
        className="card__background"
        src={`/images/${data.picture}`}
        alt={data.name}
      />
      <div className="card__container">
        <div className="card__container-title">
          <Thumb type={votes.positive >= votes.negative ? "up" : "down"} />
          <h1>{data.name}</h1>
        </div>
        <p className="card__container-description">{data.description}</p>
        <p className="card__container-time">
          {userVoted ? (
            "Thank you for your vote!"
          ) : (
            <>
              <ReactTimeAgo date={data.lastUpdated} locale="en-US" /> in{" "}
              {data.category}
            </>
          )}
        </p>
        <div className="card__container-vote">
          <Thumb
            type="up"
            isSelected={selected === "positive"}
            onClick={() => setSelected("positive")}
          />
          <Thumb
            type="down"
            isSelected={selected === "negative"}
            onClick={() => setSelected("negative")}
          />
          {!userVoted ? (
            <Button
              onClick={() => onVote(data.name, selected)}
              disabled={!selected}
            >
              Vote now
            </Button>
          ) : (
            <Button onClick={onVoteAgain}>Vote Again</Button>
          )}
        </div>
        <VoteProgress votes={votes} />
      </div>
    </div>
  );
};

export default Card;
