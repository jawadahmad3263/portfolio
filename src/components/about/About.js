import React from 'react';
import Styles from './About.module.css';
export default function About() {
    return (
        <div className={Styles.sectionAbout} id={"About"}>
      <div className="container">
        <div className={Styles.about_wrapper}>
           
          <div className={Styles.about_content}>
            <h2>About Me</h2>
            <p className={Styles.aboutInfo}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
            <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </p>
            <button className={Styles.cv_Btn}>Download CV</button>
          </div>
          <div className={Styles.aboutPictureDiv}>
            <img src="./images/aboutProfileImage.png" alt="About" />
          </div>
        </div>
      </div>
    </div>
    )
}
