import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnowflake, faStarOfLife, faDharmachakra } from "@fortawesome/free-solid-svg-icons";

import './Snowflake.css';

class Snowflake extends Component {
    state = {
        count: this.props.snowflake.value
    }

    addAnimationStyle = () => {
        return {
            animation: `${this.props.snowflake.leftPos} ${this.props.snowflake.floatDuration}s linear infinite`
        };
    }

    addRotationStyle = () => {
        return {
            animation: `rotate ${this.props.snowflake.rotationDuration}s linear infinite`
        };
    }

    render() {
        if(this.props.snowflake.icon === "faStarOfLife") {
            return (
                <div style={this.addAnimationStyle()} className={this.props.snowflake.size}>
                    <FontAwesomeIcon style={this.addRotationStyle()} className="snowflake" icon={faStarOfLife} />
                </div>
            )
        } else if(this.props.snowflake.icon === "faDharmachakra") {
            return (
                <div style={this.addAnimationStyle()} className={this.props.snowflake.size}>
                    <FontAwesomeIcon style={this.addRotationStyle()} className="snowflake" icon={faDharmachakra} />
                </div>
            )
        } else {
            return (
                <div style={this.addAnimationStyle()} className={this.props.snowflake.size}>
                    <FontAwesomeIcon style={this.addRotationStyle()} className="snowflake" icon={faSnowflake} />
                </div>
            )
        }
        
    }
}

export default Snowflake;