import React, { Component } from "react";
import "./ChatHistory.scss";

class ChatHistory extends Component {
  // take in an array of chat messages from our App.js function
  // through its' props and will subsequently render them one under the other.
  render() {
    const messages = this.props.chatHistory.map((msg, index) => (
      <p key={index}>{msg.data}</p>
    ));

    return (
      <div className="ChatHistory">
        <h2>Chat History</h2>
        {messages}
      </div>
    );
  }
}

export default ChatHistory;
