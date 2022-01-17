import logo from './logo.svg';
import './App.css';
import { connect, sendMsg } from "./api";

class App extends Component {

  // add the call to connect().
  constructor(props) {
    super(props);
    this.state = {
      chatHistory: []
    }
  }

  componentDidMount() {
    connect((msg) => {
      console.log("New Message")
      this.setState(prevState => ({
        chatHistory: [...this.state.chatHistory, msg]
      }))
      console.log(this.state);
    });
  }

  send() {
    console.log("hello");
    sendMsg("hello");
  }

  // create a <button/> element which triggers thr sendMsg() function.
  render() {
    return (
      <div className="App">
        <Header />
        <ChatHistory chatHistory={this.state.chatHistory} />
        <button onClick={this.send}>Hit</button>
      </div>
    );
  }
}

export default App;
