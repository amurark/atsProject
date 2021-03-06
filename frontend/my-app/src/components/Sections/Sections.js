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
                    <h2>Ankit</h2>
                    <h2>Travel</h2>
                    <h2>Services</h2>
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
                        Operating since 2002 from the eastern ghats of the River Yamuna in New Delhi, India, we offer an entire spectrum of travel related services, providing a one-stop-shop for all your needs. We extend prompt assistance using cutting-edge Global Reservation Systems with live inventory.
                        <br></br><br></br>
                        Having a wide industry experience and firm belief in the philosophy of 'Customer First', gives us a better insight into customer expectations and drives us to deliver the perfect solution. 
                        We take great pride in our time-tested suppliers and partners, who form the backbone of our company and help us achieve highest levels of customer satisfaction.
                        <br></br><br></br>
                        From domestic to worldwide tour arrangements – you decide the date and destination, and we will design tailor-made itineraries that are the perfect amalgamation of business, leisure, fun and adventure.
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
                    <div className="companyDetails">
                        <div className="company-logo"></div>
                        <p>818 Vikas Deep, Laxmi Nagar District Centre, Delhi 110092 India</p>
                        
                        <p><a className="emailLink" href="mailto:atsdel@gmail.com" target="_blank" rel="noopener noreferrer">atsdel@gmail.com</a> | <a className="emailLink" href="mailto:travel@ankitindia.net" target="_blank" rel="noopener noreferrer">travel@ankitindia.net</a></p>
                        <p>+91-11-4244 8417 | +91-98100 54227</p>
                        <div>
                            <div className="socialHandlesWrapper socialHandlesWrapperBorder">
                                <a href="https://www.facebook.com/ankittravelservices/" target="_blank" rel="noopener noreferrer">
                                    <div className="socialHandles fbHandle"></div>
                                </a>
                            </div>
                            <div className="socialHandlesWrapper">
                                <a href="https://www.instagram.com/vikasmurarka_ats/" target="_blank" rel="noopener noreferrer">
                                    <div className="socialHandles instaHandle"></div>
                                </a>
                            </div>
                        </div>
                        <div className="location">
                            <iframe title="locationMap" className="locationMap" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14006.814829421844!2d77.287353!3d28.638641!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4de3eac90a62f3a7!2sAnkit%20Travel%20Services!5e0!3m2!1sen!2sus!4v1591582512640!5m2!1sen!2sus" allowFullScreen="" aria-hidden="false" tabIndex="0" frameBorder="0"></iframe>
                        </div>
                        <div className="copyRights">© All rights reserved by Ankit Travel Services.</div>
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