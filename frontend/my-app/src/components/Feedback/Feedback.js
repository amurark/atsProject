import React, { Component } from 'react';

import './Feedback.css';

import Ratings from '../Ratings/Ratings';

class Feedback extends Component {

    state = {
        status: {
            msg: "",
            type: "",
            show: false
        },
        progressBarStyle: {
            "width": "0%",
            "transition": "all 0.5s ease",
            "WebkitTransition": "all 0.5s ease"
        }
    }

    constructor(props) {
        super(props);
        this.nameEl = React.createRef();
        this.emailEl = React.createRef();
        this.phoneEl = React.createRef();
        this.ratingsEl = React.createRef();
        this.feedbackEl = React.createRef();
        this.destinationEl = React.createRef();
        this.subscribeEl = React.createRef();
        this.progressPercent = 0;
        this.progressTimer = 0;
    }

    initiateProgressBar = () => {
        var self = this;
        const startWaitTime = 0.5;
        function initiateExponentialBackOff(timer) {
            self.progressTimer = setTimeout(function() {
                if(self.progressPercent < 80) {
                    self.progressPercent = self.progressPercent + 20;
                    timer *= 2;

                    self.setState(prevState => {
                        return {
                            status: prevState.status,
                            progressBarStyle: {
                                "width": `${self.progressPercent}%`,
                                "transition": "all 0.5s ease",
                                "WebkitTransition": "all 0.5s ease"
                            }
                        }
                    });
                    console.log(self.state);
                    initiateExponentialBackOff(timer);
                }
            }, timer * 1000)
        }
        initiateExponentialBackOff(startWaitTime)
    }

    destroyProgressBar = (cb) => {
        const self = this;
        // do stuff
        clearTimeout(self.progressTimer);
        self.setState(prevState => {
            return {
                status: prevState.status,
                progressBarStyle: {
                    "width": `100%`,
                    "transition": "all 0.5s ease",
                    "WebkitTransition": "all 0.5s ease"
                }
            }
        });
        setTimeout(function() {
            self.progressPercent = 0;
            self.setState(prevState => {
                return {
                    status: prevState.status,
                    progressBarStyle: {
                        "width": `0%`,
                        "transition": "none",
                        "WebkitTransition": "none"
                    }
                }
            });
            cb();
        }, 1000);
    }

    submitHandler = event => {
        event.preventDefault();
        const self = this;
        const name = this.nameEl.current.value;
        const email = this.emailEl.current.value;
        const phone = this.phoneEl.current.value;
        const ratings = this.ratingsEl.current.finalRating;
        const feedback = this.feedbackEl.current.value;
        const destination = this.destinationEl.current.value;
        const doSubscribe = this.subscribeEl.current.checked;
        console.log(ratings);
        if( email.trim().length === 0) {
            self.showStatus(true, "Provide Email!");
            return;
        }

        if(feedback.length === 0) {
            self.showStatus(true, "Provide Feedback!");
            return;
        }
        
        if(ratings < 0.5 || ratings > 5) {
            self.showStatus(true, "Provide Ratings!");
            return;
        }

        let requestBody = {
            query: `
                mutation {
                    createFeedback(feedbackInput: {
                        email: "${email}",
                        name: "${name}",
                        ratings: ${ratings},
                        feedback: "${feedback}",
                        subscribe: ${doSubscribe},
                        phone: "${phone}",
                        destination: "${destination}"
                }) {
                    email
                    name
                    ratings
                    feedback
                    subscribe
                    created_at
                    phone
                    destination
                }
              }
            `
        };
        this.initiateProgressBar();
        fetch('/graphql', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            //Content-Type ensures that the backend tries to parse JSON from the body. 
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if(res.status !== 200 && res.status !== 201) {
                throw new Error('Failed');
            }
            return res.json();
        })
        .then(resData => {
            console.log("Successfully added a feedback");
            self.destroyProgressBar(function() {
                self.showStatus(false, "Successfully submitted!");
                self.clearForm();
            });
        })
        .catch(err => {
            console.log(err);
            self.destroyProgressBar(function() {
                self.showStatus(true, "Error submitting!");
                //self.clearForm();
            });
        });
    }

    showStatus = (isError, msg) => {
        const timeoutVal = 5;
        const self = this;
        self.setState(prevState => {
            return {
                status: {
                    msg: msg,
                    type: isError ? "error" : "success",
                    show: true    
                },
                progressBarStyle: prevState.progressBarStyle
            }
        });

        setTimeout(function() {
            self.setState(prevState => {
                return {
                    status: {
                        msg: "",
                        type: "",
                        show: false
                    },
                    progressBarStyle: prevState.progressBarStyle
                }
            });
        }, timeoutVal * 1000)
    }

    clearForm = () => {
        this.nameEl.current.value = "";
        this.emailEl.current.value = "";
        this.phoneEl.current.value = "";
        this.ratingsEl.current.reinitialize();
        this.feedbackEl.current.value = "";
        this.destinationEl.current.value = "";
    }


    render() {
        return (
            <div className="form-wrapper">
                <form className="auth-form-feedback" onSubmit={this.submitHandler}>
                    <div className="headers">Feedback</div>
                    <div className="form-control required">
                        <label htmlFor="name">Name:</label>
                        <input placeholder="John Doe" type="name" id="name" ref={this.nameEl} required/>
                    </div>
                    <div className="form-control required">
                        <label htmlFor="email">Email:</label>
                        <input placeholder="johndoe@example.com" type="email" id="email" ref={this.emailEl} required/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="phone">Phone Number:</label>
                        <input type="phone" id="phone" ref={this.phoneEl}/>
                    </div>
                    <div className="form-control required">
                        <label htmlFor="ratings">Ratings:</label>
                        <Ratings ref={this.ratingsEl}/>
                    </div>
                    <div className="form-control required">
                        <label htmlFor="destination">Destination/Country travelled:</label>
                        <input placeholder="France, Germany, Austria..." type="destination" id="destination" ref={this.destinationEl} required/>
                    </div>
                    <div className="form-control required">
                        <label htmlFor="feedback">Feedback</label>
                        <textarea placeholder="Describe your experience..." type="feedback" id="feedback" ref={this.feedbackEl} required/>
                    </div>
                    <div className="form-control">
                        <label className="inline" htmlFor="subscribe">Subscribe for promotions.</label>
                        <input className="inline radioButton" type="checkbox" value="subscribed" id="subscribe" defaultChecked ref={this.subscribeEl}/>
                    </div>
                    <div className="form-actions">
                        <button className="submitButton" type="submit">Submit</button>
                    </div>
                </form>
                <div className={`statusBox ${this.state.status.show ? "showStatus" : "hideStatus"} ${this.state.status.type === "error" ? "errorBox" : "successBox"}`}>{ this.state.status.msg }</div>
                <div style={this.state.progressBarStyle} className="progress-bar"></div>
            </div>
        ) 
    }
}

export default Feedback;


