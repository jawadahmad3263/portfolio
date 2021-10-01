import React,{useState} from 'react';
import Styles from './Testimonial.module.css';
import {Link} from 'react-router-dom'
export default function Testimonial() {
  const [name,setName] = useState("Sara")
    return (
        <div className={Styles.testimonialSection}>
      <div className="container">
        <div className={Styles.testimonialWrapper}>
          <div className={Styles.testimonialHeading}>
            <h2> What My Client Says</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et t enim ad minim veniam,
              quis nostrud exercitation.
            </p>
          </div>
          <div className={Styles.clientsWrapper}>
            <div className={Styles.imgWrapper}>
              <Link className={Styles.img4}  to="/" onClick={()=>setName("Kristina")}>
                <img src="/images/1.png" alt="" />
              </Link>
              <Link className={Styles.img3}  to="/" onClick={()=>setName("Kaira")}>
               
                <img src="/images/1.png" alt="" />
              </Link>
              <Link className={Styles.img1} to="/" onClick={()=>setName("John")}>
              
                <img src="/images/3.png" alt="" />
              </Link>
              <Link  className={Styles.img2}  to="/" onClick={()=>setName("Adnan")}>
             
                <img src="/images/3.png" alt="" />
              </Link>
              <Link className={Styles.img5}  to="/" onClick={()=>setName("lady gaga")}>
           
                <img src="/images/22.png" alt="" />
              </Link>
              <Link className={Styles.img6}  to="/" onClick={()=>setName("Julia")}>
               
                <img src="/images/22.png" alt="" />
              </Link>
            </div>
            <div className={Styles.clientsRewiews}>
              <p className={Styles.para}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt is the most explicabo.
              </p>
        
              <p className={Styles.para2}>
               {name}
              </p>
              <p className={Styles.para3}>CEO ABC Company</p>
             
           </div>
        
          </div>
        </div>
      </div>
    </div>
    )
}
