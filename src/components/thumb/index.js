import React from "react";
import PropTypes from "prop-types";
import thumpUp from "assets/img/thumbs-up.svg";
import thumpDown from "assets/img/thumbs-down.svg";
import "./styles.scss";

const Thumb = ({ type, onClick, isSelected }) => {
  const data = {
    label: `thumbs ${type}`,
    icon: type === "up" ? thumpUp : thumpDown,
  };
  return (
    <button
      class={`thumb-button icon-button ${
        isSelected ? "thumb-button--selected" : ""
      }`}
      data-testid={data.label}
      aria-label={data.label}
      onClick={onClick}
    >
      <img src={data.icon} alt={data.label} />
    </button>
  );
};

Thumb.propTypes = {
  type: PropTypes.oneOf(["up", "down"]),
  onClick: PropTypes.func,
  isSelected: PropTypes.bool
};

Thumb.defaultProps = {
  type: "up",
  isSelected: false
};

export default Thumb;
