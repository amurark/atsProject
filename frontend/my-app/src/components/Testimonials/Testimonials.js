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
                title: "Had a wonderful time with the family.",
                fullStars: 4,
                halfStars: 0,
                testimonial: `With everything under one roof, you can use ATS to scour the Web to find deals on flights, hotel rooms, and rental cars. One of the best features about this travel Website are the pricing trends and the predictive algorithms on where prices are going - up or down. You can use the information gleaned to assess your options for buying now or holding off.
                            
                            Another great feature? Use ATS’s travel alerts to email you when deals pop up for your intended destination. You can also search using a range of dates (i.e. 3 days before or after your departure and arrival dates) to find the best price on deals.`,
                name: "- Margott Ritchie"
            },
            {
                title: "Intriguing Experience. Will definitely try again.",
                fullStars: 5,
                halfStars: 0,
                testimonial: `ATS is by far one of the best travel Websites for sourcing travel deals with one of the most intuitive meta search engines for pricing flights, hotels, and rental cars. Similar to Kayak, you can also setup travel alerts here to notify you when prices change.

                While you can’t book flights directly on ATS (whereas you can on Kayak), you’ll find the resource to be invaluable. Use it in conjunction with Kayak and other sites to ensure that you’re finding the best deals for a particular trip.`,
                name: "- Rakesh Singh"
            },
            {
                title: "One of the best trips ever.",
                fullStars: 4,
                halfStars: 1,
                testimonial: `With everything under one roof, you can use ATS to scour the Web to find deals on flights, hotel rooms, and rental cars. One of the best features about this travel Website are the pricing trends and the predictive algorithms on where prices are going - up or down. You can use the information gleaned to assess your options for buying now or holding off.

                Another great feature? Use ATS’s travel alerts to email you when deals pop up for your intended destination. You can also search using a range of dates (i.e. 3 days before or after your departure and arrival dates) to find the best price on deals.`,
                name: "- Brijesh Patel"
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