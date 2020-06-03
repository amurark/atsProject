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
                ],
                style: {
                    color: "#C33C54"
                }
            },
            {
                name: "Transport",
                icon: <FontAwesomeIcon icon={ faBusAlt } />,
                header: "Transport Services",
                details: [
                    "All ranges of vehicles for Domestic & International Travel",
                    "Chauffeur Driven Cabs - SUV, Luxury, Sedans"
                ],
                style: {
                    color: "#004BA8"
                }
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
                ],
                style: {
                    color: "#EE964B"
                }
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
                ],
                style: {
                    color: "#F4D35E"
                }
            },
            {
                icon: <FontAwesomeIcon icon={ faDollarSign } />,
                name: "Forex",
                header: "Currency Exchange",
                details: [
                    "Foreign currency notes",
                    "Forex Cards",
                    "Various currencies viz. Dollars, Euros, Pounds, Dirham etc."
                ],
                style: {
                    color: "#48A9A6"
                }
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
                ],
                style: {
                    color: "#6969B3"
                }
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
                    <div className="headers white-theme">Have a destination in mind? We will help you with the rest!</div>
                    <ul className="services-wrapper">
                        {
                            this.services.map((service, index) => {
                                return  (
                                    <li key={index} className="service-wrapper">
                                        <div className="holderWrapper">
                                            <div className="holder" onClick={this.renderServiceInformation.bind(this, index)}>
                                                <div className="rotateContainer">
                                                    <div style={service.style} className="frontFace">{ service.icon }</div>
                                                    <div style={service.style} className="backFace">{ service.name }</div>
                                                </div>
                                            </div>
                                            { service.name === this.state.serviceDetails.name && 
                                                <div style={service.style} className="pointer">
                                                    <FontAwesomeIcon icon={ faChevronRight } />
                                                    <FontAwesomeIcon icon={ faChevronRight } />
                                                    <FontAwesomeIcon icon={ faChevronRight } />
                                                </div> 
                                            }
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
                            <div style={this.state.serviceDetails.style} className={`service-details-contentbox__background ${this.state.serviceDetails.name.toLowerCase()}_transforms `}>{ this.state.serviceDetails.icon }</div>
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