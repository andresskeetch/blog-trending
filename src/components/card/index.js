import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "./card";
import List from "./list";

const CardCustom = ({ type, data, onVote }) => {
  const [thumbSelected, setSelected] = useState("");
  const [userVoted, setUserVoted] = useState(false);

  const onClickVote = (name, vote) => {
    onVote(name, vote);
    setUserVoted(true);
    setSelected("");
  };

  const onVoteAgain = () => {
    setUserVoted(!userVoted);
  };
  return type === "grid" ? (
    <Card
      data={data}
      onVote={onClickVote}
      userVoted={userVoted}
      setSelected={setSelected}
      selected={thumbSelected}
      onVoteAgain={onVoteAgain}
    />
  ) : (
    <List
      data={data}
      onVote={onClickVote}
      userVoted={userVoted}
      setSelected={setSelected}
      selected={thumbSelected}
      onVoteAgain={onVoteAgain}
    />
  );
};

Card.propTypes = {
  type: PropTypes.oneOf(["grid", "list"]).isRequired,
  data: PropTypes.objectOf({}),
  onVote: PropTypes.func
};

export default CardCustom;
