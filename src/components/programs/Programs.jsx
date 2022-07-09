import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";

const Programs = () => {
  return (
    <div className="programs" id="wiadomości">
      <div className="programs-header">
        <span className="stroke-text">Najnowsze</span>
        <span>wiadomości</span>
        <span className="stroke-text">z&nbsp;fizyki i&nbsp;astronomii</span>
      </div>
      <div className="program-categories">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <span>{program.date}</span>
            <div className="join-now">
              {/* <span>Join Now</span>
              <img src={RightArrow} alt="..." /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
