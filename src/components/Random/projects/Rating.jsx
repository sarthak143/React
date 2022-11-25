import React from "react";
import "./css/rating.css";
const Rating = () => {
  let limit = 5;
  const [initialValue, setInitialValue] = React.useState(2);
  const handleClick = (event) => {
    setInitialValue(+event.target.getAttribute("data"));
  };

  const handleDoubleClick = (event) => {
    if (+event.target.getAttribute("data") === 1) {
      setInitialValue(0);
    }
  };
  return (
    <div onClick={handleClick} onDoubleClick={handleDoubleClick}>
      {[...new Array(limit).keys()].map((param) => (
        <span
          key={param}
          data={param + 1}
          className={param < initialValue ? "star rated" : "star"}
        />
      ))}
    </div>
  );
};

export default Rating;
