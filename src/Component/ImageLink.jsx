import React from "react";

import img1 from "../asset/chatbot.png";
import img2 from "../asset/chatbot.png";
import img4 from "../asset/chatbot.png";
function ImageLink(props) {
  return (
    <div>
      <div className="container">
        <a href="" className="container-item">
          <img src={img1} alt="" />
          <p>shop</p>
        </a>
        <a href="" className="container-item">
          <img src={img2} alt="" />
          <p>the story</p>
        </a>

        <a href="" className="container-item">
          <img src={img4} alt="" />
          <p>location</p>
        </a>
      </div>
    </div>
  );
}

export default ImageLink;
