import React from "react";
import Styles from "./Card.module.css";
function Card(props) {
  const { eachCard } = props;
  return (
    <div className={Styles.cardStyle}>
    <div>
      <img src={eachCard.image} />
      </div>
      <div className={Styles.overlay}>
        <div className={Styles.overlay_content}>
          <h2>Sed ut Perspiciatis</h2>
          <p>Branding, Web Design</p>
        </div>
      </div>
   
  </div>
  );
}

export default Card;
