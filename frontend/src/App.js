import logo from './logo.svg';
import './App.css';
import { connect, sendMsg } from "./api";

class App extends Component {

  // add the call to connect().
  constructor(props) {
    super(props);
    connect();
  }

  send() {
    console.log("hello");
    sendMsg("hello");
  }

  // create a <button/> element which triggers thr sendMsg() function.
  render() {
    return (
      <div className="App">
        <button onClick={this.send}>Hit</button>
      </div>
    );
  }
}

export default App;
