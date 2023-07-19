import React from "react";
import "./card.scss";

const Card = () => {
  
  return (
    <div class="card">
      <div class="card-inner">
        <div class="card-front">
          <p>hover</p>
        </div>
        <div class="card-back">
          <p>Back Card</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
