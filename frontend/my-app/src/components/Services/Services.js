import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane, faBusAlt, faHotel, faShip, faSuitcaseRolling, faDollarSign, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { GiCruiser } from 'react-icons/gi';
import { FaPlane } from 'react-icons/fa';
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
                icon: <FaPlane />,
                header: "Air Tickets",
                details: [
                    "International Flight Tickets",
                    "Domestic Flight Tickets",
                    "Sector fares",
                    "Group fares",
                    "SOTO tickets - journeys originating outside India",
                    "First/Business Class Bookings"
                ],
                style: {
                    color: "#C33C54",
                    fontSize: "2rem"
                }
            },
            {
                name: "Transport",
                icon: <FontAwesomeIcon icon={ faBusAlt } />,
                header: "Transport Services",
                details: [
                    "Domestic/International travel – entire fleet of vehicles (SUV/Luxury Sedan/Limousine",
                    "Self driven/Chauffeur driven cars",
                    "Mini Vans and coaches – all configuration"
                ],
                style: {
                    color: "#004BA8",
                    fontSize: "2rem"
                }
            },
            {
                name: "Hotels",
                icon: <FontAwesomeIcon icon={ faHotel } />,
                header: "Hotel Bookings",
                details: [
                    "Worldwide Hotel Bookings",
                    "Budget Hotels",
                    "7 Star Hotels",
                    "Heritage Resorts",
                    "SPAs"
                ],
                style: {
                    color: "#EE964B",
                    fontSize: "2rem"
                }
            },
            {
                name: "Cruises",
                icon: <GiCruiser />,
                header: "Worldwide Cruises",
                details: [
                    "Celebrity Cruise",
                    "Dream Cruise",
                    "Norwegian Cruise Line",
                    "Royal Caribbean International",
                    "Star Cruise",
                    "Other major ocean/river cruise lines viz. Azmara, Princess",
                    "Jalesh Cruise (Domestic)"
                ],
                style: {
                    color: "#385F71",
                    fontSize: "3rem"
                }
            },
            {
                icon: <FontAwesomeIcon icon={ faDollarSign } />,
                name: "Forex",
                header: "Currency Exchange",
                details: [
                    "Foreign currency notes - all tradeable currencies",
                    "Forex Cards",
                    "Foreign Remittance - student fee, family support etc."
                ],
                style: {
                    color: "#48A9A6",
                    fontSize: "2rem"
                }
            },
            {
                name: "Tours",
                icon: <FontAwesomeIcon icon={ faSuitcaseRolling } />,
                header: "Tours",
                details: [
                    "Customised Packages",
                    "Honeymoon Packages",
                    "Leisure Travel",
                    "Special Interest Tours",
                    "Adventure Tours",
                    "Business/Corporate Tours",
                    "Incentive Tours",
                    "Pilgrimage Tours - Chardham/Amarnath/Kailash Mansarovar etc.",
                    "Wildlife/Desert Safari"
                ],
                style: {
                    color: "#6969B3",
                    fontSize: "2rem"
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