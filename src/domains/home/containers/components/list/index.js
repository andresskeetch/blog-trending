import React from "react";
import { Dropdown, Card } from "components";
import useGetList from "domains/home/core/hooks/useTypeView";
import "./styles.scss";

const List = ({ data, onVote }) => {
  const { options, selected, setSelected } = useGetList();
  return (
    <div className="list">
      <div className="list__header">
        <h1>Previus Rulings</h1>
        <Dropdown options={options} onChange={setSelected} value={selected} />
      </div>
      <div
        className={`list__content ${
          selected.value === "list" ? "list__content--list" : ""
        }`}
      >
        {data.map((item) => (
          <Card type={selected.value} data={item} onVote={onVote} />
        ))}
      </div>
    </div>
  );
};

export default List;
