import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "./Navbar.module.css";
export default function Navbar() {
  const [hamburgerBtn, setHamburgerBtn] = useState(false);
  const handleBurgerBtn = () => {
    if (hamburgerBtn === false) setHamburgerBtn(true);
    else setHamburgerBtn(false);
  };
  return (
    <div className={Styles.section_Navbar}>
      <div className={`container ${Styles.navbarPosition}`}>
        <div className={Styles.imgStyle}>
          <img src="./images/dots.png" alt="dots" />
        </div>
        <div className={Styles.navbarWrapper}>
          <div className={Styles.logoStyle}>
            <img src="./images/logo.png" alt="logo" />
          </div>
          <div>
            <nav>
              <ul className={Styles.listStyle}>
                <li>
                  <Link
                    to="/About"
                    onClick={() => {
                      let element = document.getElementById("About");
                      element &&
                        element.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                    }}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/portfolio"
                    onClick={() => {
                      let element = document.getElementById("portfolio");
                      element &&
                        element.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                    }}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    onClick={() => {
                      let element = document.getElementById("contact");
                      element &&
                        element.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                    }}
                  >
                    Contact
                  </Link>
                </li>

                <li>
                  <button>Get Started</button>
                </li>
              </ul>
              <button className={Styles.hmbrgrBtn} onClick={handleBurgerBtn}>
                <span className={Styles.topbar}></span>
                <span className={Styles.midbar}></span>
                <span className={Styles.bottombar}></span>
              </button>
              {/* hamburger menu */}
              {hamburgerBtn === true ? (
                <div className={Styles.hamburgerMenu}>
                <ul className={Styles.hamBurgerlist}>
                  <li>
                    <Link
                      to="/About"
                      onClick={() => {
                        let element = document.getElementById("About");
                        element &&
                          element.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                      }}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/portfolio"
                      onClick={() => {
                        let element = document.getElementById("portfolio");
                        element &&
                          element.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                      }}
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      onClick={() => {
                        let element = document.getElementById("contact");
                        element &&
                          element.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                      }}
                    >
                      Contact
                    </Link>
                  </li>

                 
                </ul>
                </div>
              ) : (
                <></>
              )}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
