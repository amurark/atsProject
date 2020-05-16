import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane, faBusAlt, faLandmark, faShip, faSuitcaseRolling, faDollarSign, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import './Services.css';

class Services extends Component {
    defaultServiceDetails = {
        name: "",
        icon: null,
        header: "",
        details: []
    }
    
    state = {
        serviceDetails: this.defaultServiceDetails,
        show: false
    }
    

    constructor(props) {
        super(props);
        this.services = [
            {
                name: "Flights",
                icon: <FontAwesomeIcon icon={ faPlane } />,
                header: "Air Tickets",
                details: [
                    "International Flight Tickets",
                    "Domestic Flight Tickets",
                    "SOTO fares",
                    "Group fares",
                    "Business Class Bookings",
                    "First Class Bookings"
                ]
            },
            {
                name: "Transport",
                icon: <FontAwesomeIcon icon={ faBusAlt } />,
                header: "Transport Services",
                details: [
                    "All ranges of vehicles for Domestic & International Travel",
                    "Chauffeur Driven Cabs - SUV, Luxury, Sedans"
                ]
            },
            {
                name: "Hotels",
                icon: <FontAwesomeIcon icon={ faLandmark } />,
                header: "Hotel Bookings",
                details: [
                    "Worldwide Hotel Reservations",
                    "7 Star Hotels",
                    "Budget Hotels",
                    "Heritage Resorts",
                    "SPA Centres"
                ]
            },
            {
                name: "Cruises",
                icon: <FontAwesomeIcon icon={ faShip } />,
                header: "Worldwide Cruises",
                details: [
                    "Star Cruise",
                    "Royal Caribbean",
                    "Prince Cruise",
                    "Cunard",
                    "NCL",
                    "MSC Cruises"
                ]
            },
            {
                name: "Forex",
                icon: <FontAwesomeIcon icon={ faDollarSign } />,
                header: "Currency Exchange",
                details: [
                    "Foreign currency notes",
                    "Forex Cards",
                    "Various currencies viz. Dollars, Euros, Pounds, Dirham etc."
                ]
            },
            {
                name: "Tours",
                icon: <FontAwesomeIcon icon={ faSuitcaseRolling } />,
                header: "Tours",
                details: [
                    "Packages",
                    "Honeymoon Packages",
                    "Leisure Travel",
                    "Special Interest Tours",
                    "Adventure Tours",
                    "Wildlife Safari",
                    "Dessert Safari"
                ]
            }
        ];
    }

    renderServiceInformation = (index) => {
        const self = this;
        this.setState({
            serviceDetails: self.services[index],
            show: true
        });
    }

    hideServiceInformation = () => {
        const self = this;
        this.setState({
            serviceDetails: self.defaultServiceDetails, 
            show: false
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="services-section">
                    <div className="headers white-theme">Have a destination in mind. We will help you with all of these...</div>
                    <ul className="services-wrapper">
                        {
                            this.services.map((service, index) => {
                                return  (
                                    <li key={index} className="service-wrapper">
                                        <div className="holderWrapper">
                                            { service.name === this.state.serviceDetails.name && 
                                                <div className="pointer">
                                                    <FontAwesomeIcon icon={ faChevronRight } />
                                                    <FontAwesomeIcon icon={ faChevronRight } />
                                                    <FontAwesomeIcon icon={ faChevronRight } />
                                                </div> 
                                            }
                                            <div className="holder" onClick={this.renderServiceInformation.bind(this, index)}>
                                                <div className="rotateContainer">
                                                    <div className="frontFace">{ service.icon }</div>
                                                    <div className="backFace">{ service.name }</div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className={`service-details ${this.state.show ? "show" : "hide"}`}>
                        <div className="collapse-service-details" onClick={this.hideServiceInformation}>
                            <FontAwesomeIcon icon={ faChevronRight } />
                        </div>
                        <div className="service-details-contentbox">
                            <div className={`service-details-contentbox__background ${this.state.serviceDetails.name.toLowerCase()}_transforms `}>{ this.state.serviceDetails.icon }</div>
                            <h2>{ this.state.serviceDetails.header }</h2>
                            <ul className="service-details-contentBox__details">
                                {
                                    this.state.serviceDetails.details.map((sDetails, index) => {
                                        return (
                                            <li key={index}> { sDetails } </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                
            </React.Fragment>
        )
    }

}

export default Services;