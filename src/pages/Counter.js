import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function Add() {
    //setCount(count + 2);
    setCount((prevCount) => prevCount + 1);
  }

  function Minus() {
    //setCount(count - 2);
    setCount((PrevCount) => PrevCount - 1);
  }

  return (
    <div>
      <button onClick={Minus}>Minus</button>
      <div>
        <h1>{count}</h1>
      </div>
      <button onClick={Add}>Plus</button>
    </div>
  );
};

export default Counter;

// toggling the favorite btn to like and unlike

// const [contact, setContact] = useState({
//   fName: "John",
//   lName: "Doe",
//   phone: "0008887766",
//   email: "example@gmail.com",
//   isFav: false,
// });

// let starIcon = contact.isFav ? (
//   <img src={star - Filled} />
// ) : (
//   <img src={star - Empty} />
// );

// function toggleFav() {
//   setContact((prevFav) => {
//     return { ...prevFav, isFav: !prevFav.isFav };
//   });
// }
