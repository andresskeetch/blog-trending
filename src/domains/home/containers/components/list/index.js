import React from "react";
import { Dropdown, Card } from "components";
import "./styles.scss";

const options = [
  {
    value: "grid",
    label: "Grid",
  },
  {
    value: "list",
    label: "List",
  },
];

const List = () => {
  return (
    <div className="list">
      <div className="list__header">
        <h1>Previus Rulings</h1>
        <Dropdown options={options} />
      </div>
      <div>
        <Card
          data={{
            name: "Kanye West",
            description:
              "Born in Atlanta and raised in Chicago, West was first known as a producer for Roc-A-Fella Records in the early 2000s, producing singles for several mainstream artists.",
            category: "entertainment",
            picture: "kanye.png",
            lastUpdated: "2020-03-10T23:08:57.892Z",
            votes: {
              positive: 23,
              negative: 36,
            },
          }}
        />
      </div>
    </div>
  );
};

export default List;
