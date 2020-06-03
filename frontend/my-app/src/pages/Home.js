import React, { Component } from 'react';

import './Home.css';

import Sections from '../components/Sections/Sections.js';
import OverlayFrame from '../components/OverlayFrame/OverlayFrame.js';
import Chat from '../components/Chat/Chat.js';

class HomePage extends Component {
    state = {
        showAnimation: false,
        devFeatures: false
    }

    render() {
        return (
            <React.Fragment>
                <div className="wrapper">
                    <Sections sectionType={"title"} sectionClassName={"company-title-animation"}/>
                    <Sections sectionType={"aboutUs"} sectionClassName={"about-us"}/>
                    {/* <Sections sectionType={"secondBackground"} sectionClassName={"second-background"}/> */}
                    <Sections sectionType={"services"} sectionClassName={"services"}/>
                    <Sections sectionType={"reviews"} sectionClassName={"reviews"}/>
                    <Sections sectionType={"testimonials"} sectionClassName={"testimonials"}/>
                    {/* <Sections sectionType={"thirdBackground"} sectionClassName={"third-background"}/> */}
                    <Sections sectionType={"contactUs"} sectionClassName={"contact-us"}/>
                </div>
                {this.state.showAnimation && (
                    <OverlayFrame />
                )}
                {this.state.devFeatures && (
                    <Chat />
                )}
            </React.Fragment>
            
        );
    }
}

export default HomePage;