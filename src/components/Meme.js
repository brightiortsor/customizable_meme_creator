import React from "react";
import memesData from "./memesData";

const Meme = () => {
  function handleImageDisplay() {
    const memesArr = memesData.data.memes;
    const randomMeme = Math.floor(Math.random() * memesArr.length);
    const url = memesArr[randomMeme].url;
    console.log(url);
  }
  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form-input" />
        <input type="text" placeholder="Bottom text" className="form-input" />
        <button className="btn" onClick={handleImageDisplay}>
          Get a new meme image
        </button>
      </div>
    </main>
  );
};

export default Meme;
