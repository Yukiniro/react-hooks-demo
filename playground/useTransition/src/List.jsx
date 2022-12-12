import { memo } from "react";
import "./List.css";

function List(props) {
  // eslint-disable-next-line react/prop-types
  const { number } = props;

  return (
    <ul className="list">
      {Array.from(Array(Number(number))).map((value, index) => {
        const id = number - index;
        return <li key={id}>{id}</li>;
      })}
    </ul>
  );
}

export default memo(List);
