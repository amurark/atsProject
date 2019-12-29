import React, { Component } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarR } from "@fortawesome/free-regular-svg-icons";

import './Ratings.css';

class Ratings extends Component {
    state = {
        count: 0,
        isLeft: false,
        isRight: false,
        submitted: false
    };

    constructor(props) {
        super(props);
        this.maxStarCount = [1,2,3,4,5];
        this.finalRating = 0.0;
    }

    submitRatings = (index, event) => {
        let finalRating;
        if(event.target.className === 'before-element') {
            finalRating = index + 0.5;
            this.setState(prevState => {
                return {isLeft: true, isRight: false, count: index, submitted: true};
            });
        } else if(event.target.className === 'after-element') {
            finalRating = index + 1;
            this.setState(prevState => {
                return {isRight: true, isLeft: false, count: index, submitted: true};
            });
            
        }
        this.finalRating = finalRating;
    };

    showOverlay = (index, event) => {
        if(!this.state.submitted) {
            if(event.target.className === 'before-element') {
                this.setState(prevState => {
                    return {isLeft: true, count: index};
                });
            } else if(event.target.className === 'after-element') {
                this.setState(prevState => {
                    return {isRight: true, count: index};
                });
            }
        }
    };

    hideOverlay = (index, event) => {
        if(!this.state.submitted) {
            if(event.target.className === 'before-element') {
                this.setState(prevState => {
                    return {isLeft: false, count: 0};
                });
            } else if(event.target.className === 'after-element') {
                this.setState(prevState => {
                    return {isRight: false, count: 0};
                });
            }
        }
    };

    render() {
        return (
            <div className="ratings-wrapper">
                {this.maxStarCount.map((value, index) => {
                    return (
                        <div key={index} className="star">
                            <div className="before-element" onMouseEnter={this.showOverlay.bind(this, index)} onMouseLeave={this.hideOverlay.bind(this, index)} onClick={this.submitRatings.bind(this, index)}></div>
                            <div className="main-star">
                                <FontAwesomeIcon icon={ faStarR } />
                            </div>
                            {(this.state.isLeft && this.state.count === index) && (
                                <div className="overlay-half-star">
                                    <FontAwesomeIcon icon={ faStarHalf } />
                                </div>
                            )}
                            {(  (this.state.isRight && this.state.count >= index) ||
                                (this.state.isLeft && this.state.count > index) ) && (
                                <div className="overlay-star">
                                    <FontAwesomeIcon icon={ faStar } />
                                </div>
                            )}
                            <div className="after-element" onMouseEnter={this.showOverlay.bind(this, index)} onMouseLeave={this.hideOverlay.bind(this, index)} onClick={this.submitRatings.bind(this, index)}></div>
                            
                        </div>
                    )
                })}
            </div>
        )
    }
}


export default Ratings;