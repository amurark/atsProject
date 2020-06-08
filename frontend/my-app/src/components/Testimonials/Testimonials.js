import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarR, faStarHalf as faStarHalfR } from "@fortawesome/free-regular-svg-icons";

import './Testimonials.css';

class Testimonials extends Component {
    
    state = {
        startAnimation: false
    }

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.testimonials = [
            {
                title: "Amazing. DMC was excellent.",
                destination: "Singapore, Genting Dream Cruise and Club Med Bintan",
                fullStars: 5,
                halfStars: 0,
                testimonial: `As per the expectations, it was very good. Club Med Bintan and Dream Cruise were an amazing experience. The vacation was wonderful and I cannot thank you enough!! Club Med was the perfect resort for us. They were close together. The flight was good and the resort, incredible!`,
                name: "- Kunal Shekhar"
            },
            {
                title: "A very cooperative and prompt response to all our queries.",
                destination: "South Africa",
                fullStars: 4,
                halfStars: 1,
                testimonial: `Accommodations booked were of top quality. Checkin, as desired, was very fast and easy. At each location, the guides/drivers were really good and had sound knowledge of the area and surrounding. They were very cooperative even if it meant giving us extra time taken beyond our schedule. Excursions in Stellenbosch & Cape Town were very good and we thoroughly enjoyed the planned excursions.`,
                name: "- Ashish Bhatia"
            },
            {
                title: "As usual, great.",
                destination: "Sri Lanka",
                fullStars: 5,
                halfStars: 0,
                testimonial: `Very knowledgeable and safe. Took us to many more places which weren't mentioned in the itinerary. Fantastic is an understatement.`,
                name: "- Ankesh Bhotika"
            }
        ];
    }

    componentDidMount = () => {
        console.log("mounted");
        document.getElementById('site-wrapper').addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount = () => {
        document.getElementById('site-wrapper').removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll = (event) => {
        let self = this;

        if(self.myRef.current.getBoundingClientRect().top < window.innerHeight) {
            if(self.state.startAnimation === false) {
                self.setState(prevState => {
                    return {
                        startAnimation: true
                    }
                });
            }
        } else {
            if(self.state.startAnimation === true) {
                self.setState(prevState => {
                    return {
                        startAnimation: false
                    }
                });
            }
        }
        
        // self.setState({
        //   transform: itemTranslate
        // });
    }

    addAnimationClass = (index) => {
        if(index === 0 && this.state.startAnimation) {
            return "slider-text1";
        }  else {
            return "";
        }
    }


    render() {
        return (
            <div className="testimonialBox" ref={this.myRef}>
                <div className="slider">
                    {
                        this.testimonials.map((testimonial, index) => {
                            return (
                                <div key={`testimonial${index}`} className={`slider-text ${this.addAnimationClass(index)}`} >
                                    <h2>{testimonial.title}</h2>
                                    <h6>{testimonial.destination}</h6>
                                    <div className="stars">
                                        {
                                            function() {
                                                let fStars = [], hStars = [];
                                                for(let i = 0; i < testimonial.fullStars; i++) {
                                                    fStars.push(<FontAwesomeIcon key={`fstar${i}`} className="star" icon={faStarR} />)
                                                }
                                                for(let i = 0; i < testimonial.halfStars; i++) {
                                                    hStars.push(<FontAwesomeIcon key={`hstar${i}`} className="star" icon={faStarHalfR} />)
                                                }
                                                return fStars.concat(hStars);
                                            }()
                                        }
                                    </div>
                                    <p>{testimonial.testimonial}</p>
                                    <h2 className="testimonial-name">{testimonial.name}</h2>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        ) 
    }
}

export default Testimonials;