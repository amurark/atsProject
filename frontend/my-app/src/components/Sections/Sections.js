import React from 'react';
import './Sections.css';

import Feedback from '../Feedback/Feedback';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const section = props => {
    if(props.sectionType === "title") {
        return (
            <div className={`section ${props.sectionClassName}`}>
                <div className={`contentBox ${props.sectionClassName}`}>
                    <h2>ankit</h2>
                    <h2>travel</h2>
                    <h2>services</h2>
                </div>
            </div>
        )
    }
    else if(props.sectionType === "aboutUs") {
        return (
            <div className="section">
                <div className={`contentBox ${props.sectionClassName}`}>
                    <div className="headers">About Us</div>
                    <p>
                        At <span style={{"color": "#ef7f13", "fontWeight": "400"}}>ats</span>, we ensure a perfect holiday for you. 
                        We offer an entire spectrum of travel related services, 
                        thus providing a “One Stop Shop” facility so that all your travel related requirements
                        are taken care of at a single point. 
                        We provide the best and fastest services using the latest in technology - Global Reservation System.
                        <br></br><br></br>From international and domestic flight tickets to Hotel Bookings, Transportion, Cruise, Tours and Customized Itineraries -
                        you decide the time and destination, and
                        we will present to you the ultimate amalgamation of leisure, fun and adventure.
                    </p>
                </div>
            </div>
            
        );
    }
    else if(props.sectionType === "secondBackground") {
        return (
            <div className="section">
                <div className={`contentBox ${props.sectionClassName}`}>
                </div>
            </div>
            
        );
    }
    else if(props.sectionType === "services") {
        return (
            <div className="section">
                <div className={`contentBox ${props.sectionClassName}`}>
                    <Services />
                </div>
            </div>
            
        );
    }
    else if(props.sectionType === "reviews") {
        return (
            <div className="section">
                <div className={`contentBox ${props.sectionClassName}`}>
                    <Feedback />
                </div>
            </div>
        );
    }
    else if(props.sectionType === "testimonials") {
        return (
            <div className="section">
                <div className={`contentBox ${props.sectionClassName}`}>
                    <Testimonials />
                </div>
            </div>
        )
    }
    else if(props.sectionType === "thirdBackground") {
        return (
            <div className="section">
                <div className={`contentBox ${props.sectionClassName}`}>
                </div>
            </div>
        );
    }
    else if(props.sectionType === "contactUs") {
        return (
            <div className="section">
                <div className={`contentBox ${props.sectionClassName}`}>
                    <div>
                        <div className="company-logo"></div>
                        <p>818 VikasDeep Building, 18, Laxmi Nagar District Center</p>
                        <p>atsdel@gmail.com | travel@ankitindia.net</p>
                        <p>+91-4244 8417 | +91-4244 8418</p>
                        <div>
                            <div className="socialHandlesWrapper socialHandlesWrapperBorder">
                                <a href="https://www.facebook.com/vikas.murarka.50" target="_blank">
                                    <div className="socialHandles fbHandle"></div>
                                </a>
                            </div>
                            <div className="socialHandlesWrapper">
                                <a href="https://www.instagram.com/vikasmurarka_ats/" target="_blank">
                                    <div className="socialHandles instaHandle"></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
    else {
        return (
            <div className="section"></div>
        )
    }
    
    
};

export default section;