import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

const Plans = () => {
  return (
    <div className="plans-container" id="autor">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">Najlepsze</span>
        <span>bestsellery</span>
        <span className="stroke-text">Michio Kaku</span>
      </div>
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>{plan.price}</span>
            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="..." />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>{/* <span>Zobacz więcej →</span> */}</div>
            {/* {plansData.map((href) => (
              <a href={href} target="_blank" rel="noopener nooreferer">
                <button className="btn">Czytaj</button>
              </a>
            ))} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
