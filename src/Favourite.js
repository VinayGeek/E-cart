import React from "react";

const Favourite = (props) => {
  let Data = props.data;

  return (
    <>
      {Data.map((value, index) => {
        return (
          <div key={index}>
            <h4>{value} </h4> <br />
          </div>
        );
      })}
    </>
  );
};

export default Favourite;
