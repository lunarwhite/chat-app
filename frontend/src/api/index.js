var socket = new WebSocket("ws://localhost:8080/ws");

// proceed to print out issues to the browser console.
let connect = cb => {
  console.log("connecting");

  socket.onopen = () => {
    console.log("Successfully Connected");
  };

  socket.onmessage = msg => {
    console.log(msg);

    // callback whenever receive our message.
    cb(msg);
  };

  socket.onclose = event => {
    console.log("Socket Closed Connection: ", event);
  };

  socket.onerror = error => {
    console.log("Socket Error: ", error);
  };
};

// send messages from our frontend to our backend
// via our WebSocket connection using socket.send()
let sendMsg = msg => {
  console.log("sending msg: ", msg);
  socket.send(msg);
};

export { connect, sendMsg };