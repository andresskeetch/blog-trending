import React from "react";
import Select from "react-select";
import "./styles.scss";

const Dropdown = ({ options, value, onChange }) => {
  return (
    <Select
      value={value}
      onChange={onChange}
      options={options}
      className="select"
      components={{
        IndicatorSeparator: () => null,
      }}
    />
  );
};

export default Dropdown;
