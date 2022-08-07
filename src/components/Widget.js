import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "./Widget.css";

function Widget() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LiReddit News</h2>
        <InfoIcon />
      </div>
      {newsArticle("We are back!", "Top news - 9099 readers")}
      {newsArticle("Coronavirus: India Updates", "Top news - 883 readers")}
      {newsArticle("Tesla hits new highs", "Cars & auto - 300 readers")}
      {newsArticle("Crypto market drops", "Science & Technology - 300 readers")}
      {newsArticle("Is REACT good?", "Code - 300 readers")}
    </div>
  );
}

export default Widget;
