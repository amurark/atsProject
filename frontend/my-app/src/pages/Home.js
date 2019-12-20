import React, { Component } from 'react';

import './Home.css';

import Sections from '../components/Sections/Sections.js'

class HomePage extends Component {
    render() {
        return (
            <div className="wrapper">
                <Sections sectionType={"title"} sectionClassName={"company-title-animation"}/>
                <Sections sectionType={"aboutUs"} sectionClassName={"about-us"}/>
                <Sections sectionType={"secondBackground"} sectionClassName={"second-background"}/>
                <Sections sectionType={"services"} sectionClassName={"services"}/>
                <Sections sectionType={"reviews"} sectionClassName={"reviews"}/>
                <Sections sectionType={"testimonials"} sectionClassName={"testimonials"}/>
                <Sections sectionType={"thirdBackground"} sectionClassName={"third-background"}/>
                <Sections sectionType={"contactUs"} sectionClassName={"contact-us"}/>
            </div>
        );
    }
}

export default HomePage;