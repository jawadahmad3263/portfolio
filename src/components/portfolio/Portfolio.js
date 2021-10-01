import React,{useState} from 'react';
import Styles from './Portfolio.module.css'
import apri from "./images/apri.png"
import bane from "./images/bane.png"
import v1 from "./images/v1.png"
import nalie from "./images/nalie.png"
import abad from "./images/abad.png";
import Card from '../card/Card';    
export default function Portfolio() {
    const allcards = [
        { image: apri },
        { image: bane },
        { image: v1 },
        { image: abad },
        { image: bane},
        { image: nalie},
      ];
      const reactCards = [
        { image: nalie },
        { image: nalie },
      ];
      const phpCards = [
        { image: nalie },
        { image: abad },
        { image: bane},
      ];
      const nodeCards = [
        { image:bane},
        { image: v1 },
        { image: apri },
      ];
      const [cardData, setCardData] = useState(allcards);
    return (
        <div className={Styles.section_portfolio} id="portfolio">
      <div className="container">
          <div className={Styles.title}><h2>Portfolio</h2></div>
        <div className={Styles.button_wraper}>
          <button  className={Styles.tabs_btn} onClick={() => setCardData(allcards)}>
            All
          </button>
          <button  className={Styles.tabs_btn} onClick={() =>  setCardData(reactCards)}>
            React
          </button>
          <button  className={Styles.tabs_btn} onClick={() =>  setCardData(phpCards)}>
            Php
          </button>
          <button className={Styles.tabs_btn} onClick={() =>  setCardData(nodeCards)}>
            Node
          </button>
        </div>
        <div className={Styles.tabs_wrapper}>
          {cardData.map((item) => {
            return  <Card eachCard={item} />;
          })}
        </div>
      </div>
    </div>
    )
}
