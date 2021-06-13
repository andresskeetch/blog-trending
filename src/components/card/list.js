import React from "react";
import { Thumb, Button } from "components";
import "./list.scss";
import VoteProgress from "./vote-progress";

const List = ({
  data,
  onVote,
  selected,
  setSelected,
  userVoted,
  onVoteAgain,
}) => {
  const { votes } = data;
  return (
    <div className="card-list">
      <img
        className="card-list__background"
        src={`/images/${data.picture}`}
        alt={data.name}
      />
      <div className="card-list__container">
        <Thumb type={votes.positive >= votes.negative ? "up" : "down"} />
        <div>
          <div className="card-list__container-title">
            <h1>{data.name}</h1>
            <p>{data.description}</p>
          </div>
          <div className="card-list__container-vote">
            <p>{userVoted ? "Thank you for your vote!" : data.category}</p>
            <div>
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
          </div>
        </div>
      </div>
      <div className="card-list__progress">
        <VoteProgress votes={votes} />
      </div>
    </div>
  );
};

export default List;
