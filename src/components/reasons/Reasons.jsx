import React from "react";
import "./Reasons.css";
import image1 from "../../assets/23.png";
import image2 from "../../assets/27.png";
import image3 from "../../assets/17.png";
import image4 from "../../assets/18.png";
import nb from "../../assets/1.gif";
import adidas from "../../assets/2.gif";
import nike from "../../assets/3.gif";
import tick from "../../assets/tick.png";
import big from "../../assets/4.gif";

const Reasons = () => {
  return (
    <div className="reasons" id="unifikacja">
      <div className="left-r">
        <img src={image1} alt="..." />
        <img src={image2} alt="..." />
        <img src={image3} alt="..." />
        <img src={image4} alt="..." />
      </div>
      <div className="right-r">
        <span>Michio Kaku interesują</span>
        <div>
          <span className="stroke-text">związki</span>
          <span>&nbsp;pomiędzy</span>
        </div>
        <div className="details-r">
          <div>
            <img src={tick} alt="..."></img>
            <span>oddziaływaniem silnym,</span>
          </div>
          <div>
            <img src={tick} alt="..." />
            <span>oddziaływaniem słabym,</span>
          </div>
          <div>
            <img src={tick} alt="..." />
            <span>grawitacją,</span>
          </div>
          <div>
            <img src={tick} alt="..." />
            <span>elektromagnetyzmem.</span>
          </div>
        </div>
        <span
          style={{
            color: "var(--gray)",
            fontWeight: "normal",
          }}
        >
          Wizualizacje
        </span>
        <div className="partners">
          <img src={big} alt="..." />
          <img src={adidas} alt="..." />
          <img src={nb} alt="..." />
          <img src={nike} alt="..." />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
