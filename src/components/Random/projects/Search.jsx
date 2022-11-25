import React, { useState } from "react";

function Search() {
  let fruits = ["apple", "banana", "kiwi"];

  const [data, setData] = useState(fruits);
  function search(e) {
    // alert(e.target.value);
    setData(fruits.filter((i) => i.indexOf(e.target.value) > -1));
  }
  return (
    <>
      <input onChange={search} />

      <ul>
        {data.map((i) => (
          <li>{i}</li>
        ))}
      </ul>
    </>
  );
}

export default Search;
