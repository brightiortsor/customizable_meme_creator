import { React, useState } from "react";
import memesData from "./memesData";

const Meme = () => {
  const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg");
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function handleImageDisplay() {
    const memesArr = allMemeImages.data.memes;
    const randomMeme = Math.floor(Math.random() * memesArr.length);
    const url = memesArr[randomMeme].url;
    setMeme((prevMeme) => {
      return { ...prevMeme, randomImage: url };
    });
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
      <div>
        <img src={meme.randomImage} alt="" className="meme-image" />
      </div>
    </main>
  );
};

export default Meme;
