import React from "react";
import PropTypes from "prop-types";
import thumpUp from "assets/img/thumbs-up.svg";
import thumpDown from "assets/img/thumbs-down.svg";
import "./styles.scss";

const Thumb = ({ type }) => {
  const data = {
    label: `thumbs ${type}`,
    icon: type === "up" ? thumpUp : thumpDown,
  };
  return (
    <button class="thumb-button icon-button" aria-label={data.label}>
      <img src={data.icon} alt={data.label} />
    </button>
  );
};

Thumb.propTypes = {
  type: PropTypes.oneOf(["up", "down"]),
};

Thumb.defaultProps = {
  type: "up",
};

export default Thumb;
