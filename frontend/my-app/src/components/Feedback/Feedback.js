import React, { Component } from 'react';

import './Feedback.css';

import Ratings from '../Ratings/Ratings';

class Feedback extends Component {

    constructor(props) {
        super(props);
        this.nameEl = React.createRef();
        this.emailEl = React.createRef();
        this.phoneEl = React.createRef();
        this.ratingsEl = React.createRef();
        this.feedbackEl = React.createRef();
        this.destinationEl = React.createRef();
        this.subscribeEl = React.createRef();
    }

    submitHandler = (event) => {
        event.preventDefault();

        const name = this.nameEl.current.value;
        const email = this.emailEl.current.value;
        const phone = this.phoneEl.current.value;
        const ratings = this.ratingsEl.current.finalRating;
        const feedback = this.feedbackEl.current.value;
        const destination = this.destinationEl.current.value;
        const doSubscribe = this.subscribeEl.current.checked;
        console.log(ratings);
        if( email.trim().length === 0 ||
            ratings < 1 || ratings > 5 ||
            feedback.length === 0 ) {
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
                        subscribe: ${doSubscribe}
                }) {
                    _id
                    email
                    name
                    ratings
                    feedback
                    subscribe
                    created_at
                }
              }
            `
        };
        console.log(JSON.stringify(requestBody, null, 2));
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
            console.log(resData);
        })
        .catch(err => {
            console.log(err);
        });

    }


    render() {
        return (
            <form className="auth-form" onSubmit={this.submitHandler}>
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
                    <label htmlFor="subscribe">Subscribe for promotions.</label>
                    <input type="checkbox" value="subscribed" id="subscribe" defaultChecked ref={this.subscribeEl}/>
                </div>
                <div className="form-actions">
                    <button type="submit">Submit</button>
                </div>
            </form>
        ) 
    }
}

export default Feedback;


