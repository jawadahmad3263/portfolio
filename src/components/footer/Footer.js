import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Footer.module.css";
import {
  FaBehance,
  FaDribbble,
  FaPinterest,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
    return (
        
    <div className={Styles.section_footer}>
    <div className="container">
        <div className={Styles.footer_content}>
          <h3>Portfolio</h3>
          <p>About | Portfolio | Contact | Testimonials</p>
          <p>NY / +1 123456 7890 / hello@graphics.studio.com</p>
          <ul className={Styles.social_style}>
            <li>
              <Link>
                <FaBehance color="white" fontSize="3rem" />
              </Link>
            </li>
            <li>
              <Link>
                <FaDribbble color="white" fontSize="3rem" />
              </Link>
            </li>
            <li>
              <Link>
                <FaPinterest color="white" fontSize="3rem" />
              </Link>
            </li>
            <li>
              <Link>
                <FaInstagram color="white" fontSize="3rem" />
              </Link>
            </li>
            <li>
              <Link>
                <FaLinkedinIn color="white" fontSize="3rem" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    
    <div className={Styles.copyRightDiv}>
      <p>Copyright © 2021 Iplex Pvt Ltd | All rights reserved</p>
    </div>
  </div>

    )
}
///////

