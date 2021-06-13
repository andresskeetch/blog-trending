import React from "react";
import PropTypes from "prop-types";
import Card from "./card";
import List from "./list";

const CardCustom = ({ type, data }) => {
  return type === "card" ? <Card data={data} /> : <List data={data} />;
};

Card.propTypes = {
  type: PropTypes.oneOf(["card", "list"]).isRequired,
};

export default CardCustom;
