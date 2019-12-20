import React, { Component } from 'react';

import './Feedback.css';

class Feedback extends Component {

    constructor(props) {
        super(props);
        this.nameEl = React.createRef();
        this.emailEl = React.createRef();
        this.ratingsEl = React.createRef();
        this.feedbackEl = React.createRef();
        this.subscribeEl = React.createRef();
    }

    submitHandler = (event) => {
        event.preventDefault();

        const name = this.nameEl.current.value;
        const email = this.emailEl.current.value;
        const ratings = parseFloat(this.ratingsEl.current.value);
        const feedback = this.feedbackEl.current.value;
        const doSubscribe = this.subscribeEl.current.checked;

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
        fetch('http://localhost:9001/graphql', {
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
                <div className="form-control">
                    <label htmlFor="name">Name*</label>
                    <input type="name" id="name" ref={this.nameEl} required/>
                </div>
                <div className="form-control">
                    <label htmlFor="email">E-Mail*</label>
                    <input type="email" id="email" ref={this.emailEl} required/>
                </div>
                <div className="form-control">
                    <label htmlFor="ratings">Ratings*</label>
                    <select ref={this.ratingsEl}>
                        <option value="5">5</option>
                        <option value="4.5">4.5</option>
                        <option value="4">4</option>
                        <option value="3.5">3.5</option>
                        <option value="3">3</option>
                        <option value="2.5">2.5</option>
                        <option value="2">2</option>
                        <option value="1.5">1.5</option>
                        <option value="1">1</option>
                    </select>
                </div>
                <div className="form-control">
                    <label htmlFor="feedback">Feedback*</label>
                    <textarea type="feedback" id="feedback" ref={this.feedbackEl} required/>
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


