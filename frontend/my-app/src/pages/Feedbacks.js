import React, { Component } from 'react';
import AuthContext from '../context/auth-context';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import './Feedbacks.css';


class FeedbacksPage extends Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = {
            feedbacks: []
        }
        
    }

    componentDidMount() {
        this.getAllFeedbacks();
    }
    

    getAllFeedbacks = () => { 
        try {
            if(!this.context.hasOwnProperty('token') ||
               !this.context.token ) {
                throw new Error("Not Allowed");
            } 

            let requestBody = {
                query: `
                    query {
                        retrieveAllFeedbacks { 
                            email
                            name
                            feedback
                            subscribe
                            ratings
                            created_at 
                        }
                    }
                `
            };
    
            fetch('/graphql', {
                method: 'POST',
                body: JSON.stringify(requestBody),
                //Content-Type ensures that the backend tries to parse JSON from the body. 
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.context.token}`
                }
            })
            .then(res => {
                if(res.status !== 200 && res.status !== 201) {
                    throw new Error('Failed');
                }
                return res.json();
            })
            .then(resData => {
                if( resData && 
                    resData.data &&
                    resData.data.retrieveAllFeedbacks) {
                    this.setState ({
                        feedbacks: resData.data.retrieveAllFeedbacks
                    })
                } else {
                    throw new Error("Invalid response");
                }
                
            })
            .catch(err => {
                console.error(err);
            });
        } catch(err) {
            console.error(err);
        }
               
    }

    getFilteredFeedbacks = () => {
        if(!this.context.hasOwnProperty('token')) {
            console.error("Not Allowed");
            return new Error("Not Allowed");
        } 

        let requestBody = {
            query: `
                query {
                    retrieveAllFeedbacks { 
                        email
                        name
                        feedback
                        subscribe
                        ratings
                        created_at 
                    }
                }
            `
        };

        fetch('/graphql', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            //Content-Type ensures that the backend tries to parse JSON from the body. 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.context.token}`
            }
        })
        .then(res => {
            if(res.status !== 200 && res.status !== 201) {
                throw new Error('Failed');
            }
            return res.json();
        })
        .catch(err => {
            console.log(err);
        });
    }

    
    render() {
        return (
            <div className="promotions-wrapper">
                <ul className="feedbacks-wrapper">
                    {
                        this.state.feedbacks.map((feedback, index) => {
                            return  (
                                <li key={index} className="feedback-wrapper">
                                    <div className="feedback-username">{ feedback.email }</div>
                                    <div className="feedback-email">{ feedback.name }</div>
                                    <div className="feedback-content">{ feedback.feedback }</div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default FeedbacksPage;