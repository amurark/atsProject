import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import './Promotions.css';


class PromotionsPage extends Component {

    render() {
        return (
            <div className="promotions-wrapper">
                <div className="promotions-box">
                    <div className="promotions-left-nav">
                        <FontAwesomeIcon icon={ faChevronLeft } />
                    </div>
                    <div className="promotions-content-box">
                        <div className="promotions-content-header">
                            <h1>Some hudson cruise I believe!!</h1>
                        </div>
                        <div className="promotions-content-image"></div>
                        <div className="promotions-content-body">
                            <p>We, at <b>Ankit Travel Services</b> ensure a perfect holiday for you. Right from international and domestic flight tickets to Hotel Bookings, cabs, buses, trains, cruise, tours and customized itenararies. You decide the time and destination. We will present to you the ultimate amalgamation of leisure, fun and adventure. ensure a perfect holiday for you. Right from international and domestic flight tickets to Hotel Bookings, cabs, buses, trains, cruise, tours and customized itenararies. You decide the time and destination. We will present to you the ultimate amalgamation of leisure, fun and adventure. ensure a perfect holiday for you. Right from international and domestic flight tickets to Hotel Bookings, cabs, buses, trains, cruise, tours and customized itenararies. You decide the time and destination. We will present to you the ultimate amalgamation of leisure, fun and adventure.</p>
                        </div>
                        <div className="promotions-content-footer">
                            <h2>Ankit Travel Services</h2>
                            <p>818 VikasDeep Building, 18, Laxmi Nagar District Center</p>
                            <p>atsdel@gmail.com | travel@ankitindia.net</p>
                            <p>+91-4244 8417 | +91-4244 8418</p>
                            <a href="/"> Subscribe to our mailing list</a>
                        </div>
                    </div>
                    <div className="promotions-right-nav">
                        <FontAwesomeIcon icon={ faChevronRight } />
                    </div>
                </div>
            </div>
        )
    }
}

export default PromotionsPage;