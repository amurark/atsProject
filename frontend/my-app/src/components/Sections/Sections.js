import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import './Sections.css';

import Feedback from '../Feedback/Feedback';
import Services from '../Services/Services';

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
                        We, at <b>Ankit Travel Services</b> ensure a perfect holiday for you. 
                        We offer an entire spectrum of travel related services to our customers, 
                        thus providing them a “One Stop Shop” facility so that all their travel related requirements
                        are taken care of at a single point. 
                        We provide best and fastest services using latest in Information Technology - Global Reservation System.
                        Right from international and domestic flight tickets to Hotel Bookings, Transportion, Cruise, Tours and Customized Itineraries. 
                        <br></br><br></br>You decide the time and destination and
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
                    <div className="testimonialBox">
                    <div className="slider">
                        <div className="slider-text slider-text1">
                            <h2>Had a wonderful time with the family.</h2>
                            <div className="stars">
                                <FontAwesomeIcon className="star" icon={faStar} />
                                <FontAwesomeIcon className="star" icon={faStar} />
                                <FontAwesomeIcon className="star" icon={faStar} />
                                <FontAwesomeIcon className="star" icon={faStar} />
                            </div>
                            <p>
                                "With everything under one roof, you can use ATS to scour the Web to find deals on flights, hotel rooms, and rental cars. One of the best features about this travel Website are the pricing trends and the predictive algorithms on where prices are going - up or down. You can use the information gleaned to assess your options for buying now or holding off.

                                Another great feature? Use ATS’s travel alerts to email you when deals pop up for your intended destination. You can also search using a range of dates (i.e. 3 days before or after your departure and arrival dates) to find the best price on deals."
                            </p>
                            <h2 className="testimonial-name">- Rakesh Singh</h2>
                        </div>
                        <div className="slider-text">
                            <h2>Intriguing Experience. Will definitely try again.</h2>
                            <div className="stars">
                                <FontAwesomeIcon className="star" icon={faStar} />
                                <FontAwesomeIcon className="star" icon={faStar} />
                                <FontAwesomeIcon className="star" icon={faStar} />
                                <FontAwesomeIcon className="star" icon={faStar} />
                                <FontAwesomeIcon className="star" icon={faStarHalf} />
                            </div>
                            <p>
                                "ATS is by far one of the best travel Websites for sourcing travel deals with one of the most intuitive meta search engines for pricing flights, hotels, and rental cars. Similar to Kayak, you can also setup travel alerts here to notify you when prices change.

                                While you can’t book flights directly on ATS (whereas you can on Kayak), you’ll find the resource to be invaluable. Use it in conjunction with Kayak and other sites to ensure that you’re finding the best deals for a particular trip."
                            </p>
                            <h2 className="testimonial-name">- Margott Ritchie</h2>
                        </div>
                        <div className="slider-text">
                            <h2>One of the best trips ever.</h2>
                            <div className="stars">
                                <FontAwesomeIcon className="star" icon={faStar} />
                                <FontAwesomeIcon className="star" icon={faStar} />
                                <FontAwesomeIcon className="star" icon={faStar} />
                                <FontAwesomeIcon className="star" icon={faStar} />
                                <FontAwesomeIcon className="star" icon={faStar} />
                            </div>
                            <p>
                                "With everything under one roof, you can use ATS to scour the Web to find deals on flights, hotel rooms, and rental cars. One of the best features about this travel Website are the pricing trends and the predictive algorithms on where prices are going - up or down. You can use the information gleaned to assess your options for buying now or holding off.

                                Another great feature? Use ATS’s travel alerts to email you when deals pop up for your intended destination. You can also search using a range of dates (i.e. 3 days before or after your departure and arrival dates) to find the best price on deals."
                            </p>
                            <h2 className="testimonial-name">- Brijesh Patel</h2>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </div>
            
        );
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
                        <h2>Ankit Travel Services</h2>
                        <p>818 VikasDeep Building, 18, Laxmi Nagar District Center</p>
                        <p>atsdel@gmail.com | travel@ankitindia.net</p>
                        <p>+91-4244 8417 | +91-4244 8418</p>
                        <a href="/"> Subscribe to our mailing list</a>
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