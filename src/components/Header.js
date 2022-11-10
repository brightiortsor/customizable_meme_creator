import React from "react";
import "../App.css";

const Header = () => {
  return (
    <header className="header">
      <img
        className="photo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiUM8U0ZzU_83sB-GnMN7KbJcybu5Vnlg5eg&usqp=CAU"
        alt=""
      />
      <h3 className="title">Tessy's Meme Creator</h3>
      <p className="project-p">For Whatsapp People</p>
    </header>
  );
};

export default Header;
