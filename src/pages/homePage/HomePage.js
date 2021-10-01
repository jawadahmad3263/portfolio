import React from 'react'
import About from '../../components/about/About'
import Footer from '../../components/footer/Footer'
import Home from '../../components/Home/Home'
import Navbar from '../../components/navbar/Navbar'
import Resume from '../../components/resume/Resume'
import Portfolio from '../../components/portfolio/Portfolio'
import Contact from '../../components/contact/Contact'
import Testimonial from '../../components/testimonial/Testimonial'
import {BrowserRouter} from 'react-router-dom'
export default function HomePage() {
    return (
        <BrowserRouter>
        <Navbar/>
        <Home/>
        <About/>
        <Portfolio/>
        <Resume/>
        <Testimonial />
        <Contact/>
        <Footer/>
        </BrowserRouter>
    )
}
