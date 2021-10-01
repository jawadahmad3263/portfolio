import React from "react";
import Styles from "./Home.module.css";
import {
  FaBehance,
  FaDribbble,
  FaPinterest,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className={Styles.homeSection} id="Home">
      <div className="container">
        <div className={Styles.homeWrapper}>
          <div className={Styles.homeContent}>
            <h6>Hello I am</h6>
            <h1>Mark Reccardo</h1>

            <p>
              A young <span>UI/UX</span> designer with crazy for mobile & web
              design.
            </p>
            <p className={Styles.findme}>Find Me on</p>
            <div className={Styles.homeImage}>
              <img src="/images/circle.png" alt="hero" />
            </div>
            <ul className={Styles.socialStyle}>
              <li>
                <Link>
                  <FaBehance className={Styles.iconsCss} />
                </Link>
              </li>
              <li>
                <Link>
                  <FaDribbble className={Styles.iconsCss} />
                </Link>
              </li>
              <li>
                <Link>
                  <FaPinterest className={Styles.iconsCss} />
                </Link>
              </li>
              <li>
                <Link>
                  <FaInstagram className={Styles.iconsCss} />
                </Link>
              </li>
              <li>
                <Link>
                  <FaLinkedinIn className={Styles.iconsCss} />
                </Link>
              </li>
            </ul>
            <div className={Styles.homeBtnPosition}>
              <button className={Styles.hireMe}>Hire Me</button>
              <button className={Styles.portfolioBtn}>Portfolio</button>
            </div>
          </div>
          <div className={Styles.imgWrapper}>
            <img src="/images/profilePic.png" alt="HeroImage" />
          </div>
        </div>
      </div>
    </div>
  );
}
