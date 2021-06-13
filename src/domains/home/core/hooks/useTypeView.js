import { useState } from "react";

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

const useGetList = () => {
  const [selected, setSelected] = useState(options[0]);

  return { options, selected, setSelected };
};

export default useGetList;
