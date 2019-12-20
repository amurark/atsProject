import React from 'react';

import './Profile.css';

const profile = props => {
    return (
        <form className="auth-form">
            <div className="headers">profile</div>
            <div className="form-control">
                <label htmlFor="name">Name</label>
                <input type="name" id="name"/>
            </div>
            <div className="form-control">
                <label htmlFor="email">E-Mail</label>
                <input type="email" id="email"/>
            </div>
            <div className="form-control">
                <label htmlFor="profile">profile</label>
                <textarea type="profile" id="profile"/>
            </div>
            <div className="form-actions">
                <button type="submit">Submit</button>
            </div>
        </form>
    )
};

export default profile;;


