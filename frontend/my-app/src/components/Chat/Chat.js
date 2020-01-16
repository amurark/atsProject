import React, { Component } from 'react';


import './Chat.css';

class Chat extends Component {

    state = {
        isActive: false
    }
    

    toggleChatBox = () => {
        let self = this;
        this.setState({
            isActive: !self.state.isActive
        });
    }

    render() {
        return (
            <div className="chat-wrapper">
                <div className="chat-box">
                    <div className="chat-box__header" onClick={this.toggleChatBox}>Chat</div>
                    <div className={"chat-box__body " + (this.state.isActive ? 'expanded' : 'collapsed')}></div>
                </div>
            </div>
        )
    }
}

export default Chat;