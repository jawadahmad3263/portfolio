import React from "react";
import { Link } from "react-router-dom";
import Styles from './Contact.module.css';

export default function Contact() {
    return (
        <div className={Styles.section_contact} id="contact">
      <div className="container">
        <div className={Styles.contact_wrapper}>
          <div className={Styles.contact_info}>
            <h2>Let’s Make Something Great Together</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et t enim ad minim veniam,
              quis nostrud exercitation.
            </p>
          </div>
          <div>
            <form className={Styles.form}>
              <div className={Styles.form_insideWrap}>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <div className={Styles.form_insideWrap}>
                <input type="number" placeholder="Phone#" />              
                <input type="number" placeholder="Budget" />  
              </div>
              <div>
                <textarea type="text" rows="20" placeholder="message" />
              </div>
            </form>
          </div>
          <div className={Styles.formBtnDiv}>
              <button className={Styles.form_Btn}>Hire Me</button>
          </div>
        </div>
      </div>
    </div>
    )
}


    

