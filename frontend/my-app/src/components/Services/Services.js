import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane, faBusAlt, faHotel, faShip, faSuitcaseRolling, faDollarSign, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import './Services.css';

class Services extends Component {
    state = {
        serviceDetails: {
            name: "",
            icon: null,
            header: "",
            details: ""
        },
        show: false
    }
    

    constructor(props) {
        super(props);
        this.services = [
            {
                name: "Flights",
                icon: <FontAwesomeIcon icon={ faPlane } />,
                header: "Air Tickets",
                details: `- International & Domestic Tickets \n - SOTO fares \n - Group fares`
                
            },
            {
                name: "Transport",
                icon: <FontAwesomeIcon icon={ faBusAlt } />,
                header: "Transport Services",
                details: `- All ranges of vehicles for Domestic & International Travel \n - Chauffeur Driven Cabs - SUV, Luxury, Sedans`
            },
            {
                name: "Hotels",
                icon: <FontAwesomeIcon icon={ faHotel } />,
                header: "Hotel Bookings",
                details: `- Worldwide Hotel Reservations \n - 7 Star to Budget Hotels, Heritage, Resorts & SPA Centres`
            },
            {
                name: "Cruises",
                icon: <FontAwesomeIcon icon={ faShip } />,
                header: "Worldwide Cruises",
                details: `- Star Cruise \n - Royal Caribbean \n - Princes Cruise \n - Cunard \n - NCL \n - MSC Cruises`
            },
            {
                name: "Forex",
                icon: <FontAwesomeIcon icon={ faDollarSign } />,
                header: "Currency Exchange",
                details: "- Foreign currency notes \n - Forex Cards"
            },
            {
                name: "Tours",
                icon: <FontAwesomeIcon icon={ faSuitcaseRolling } />,
                header: "Tours",
                details: "- Package \n - Honeymoon Packages \n - Leisure Travel \n - Special Interest, Adventure & Wildlife/Safari Tours"
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
        this.setState(prevState => {
            return {serviceDetails: prevState.serviceDetails, show: false};
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
                                        <div className="holder" onClick={this.renderServiceInformation.bind(this, index)}>
                                            <div className="rotateContainer">
                                                <div className="frontFace">{ service.icon }</div>
                                                <div className="backFace">{ service.name }</div>
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
                            <h2>{ this.state.serviceDetails.header }</h2>
                            <p> { this.state.serviceDetails.details }</p>
                        </div>
                    </div>
                </div>
                
            </React.Fragment>
        )
    }

}

export default Services;