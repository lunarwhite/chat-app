import React, { Component } from "react";
import "./ChatHistory.scss";
import Message from '../Message/Message';

class ChatHistory extends Component {
  // take in an array of chat messages from our App.js function
  // through its' props and will subsequently render them one under the other.
  render() {
    console.log(this.props.chatHistory);
    const messages = this.props.chatHistory.map(msg => <Message message={msg.data} />);

    return (
      <div className='ChatHistory'>
        <h2>Chat History</h2>
        {messages}
      </div>
    );
  };
}

export default ChatHistory;
