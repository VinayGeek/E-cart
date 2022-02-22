import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const newArr = [
  "high",
  "cruel",
  "nappy",
  "sable",
  "mine",
  "vagabond",
  "sassy",
  "steer",
  "argument",
  "unaccountable",
  "tie",
  "middle",
];
function Home(props) {
  const history = useHistory();
  const [Data, setData] = useState([]);

  return (
    <>
      <h1>Add items to favorite list</h1>
      {newArr.map((data, index) => {
        return (
          <label className="container" key={index}>
            <br />
            {data}
            <input
              type="checkbox"
              onClick={() => setData((prev) => [...prev, data])}
            />
            <span className="checkmark"></span>
          </label>
        );
      })}
      <br />
      <button type="button" onClick={() => props.datahandler(Data)}>
        Submit Fav List
      </button>
      <br />
      <button onClick={() => history.push("/fav")}>Check Favorite Items</button>
    </>
  );
}

export default Home;
