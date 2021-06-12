import React from "react";
import Select from "react-select";
import "./styles.scss";

const Dropdown = ({ options, value }) => {
  return (
    <Select
      value={value}
      options={options}
      className="select"
      components={{
        IndicatorSeparator: () => null,
      }}
    />
  );
};

export default Dropdown;
