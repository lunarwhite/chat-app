# chat-app
A simple real-time chat app written in Golang and React.
```
.
├── LICENSE
├── README.md
├── backend
│   ├── Dockerfile
│   ├── go.mod
│   ├── go.sum
│   ├── main.go
│   └── pkg
│       └── websocket
│           ├── client.go
│           ├── pool.go
│           └── websocket.go
└── frontend
    ├── README.md
    ├── node_modules
    ├── package-lock.json
    ├── package.json
    ├── public
    └── src
        ├── App.css
        ├── App.js
        ├── App.test.js
        ├── api
        │   └── index.js
        ├── components
        │   ├── ChatHistory
        │   ├── ChatInput
        │   ├── Header
        │   └── Message
        ├── index.css
        ├── index.js
        ├── logo.svg
        ├── reportWebVitals.js
        └── setupTests.js
```

# setup envs
- golang
- npm & npx & node-sass

# build steps
- part1: env setup
  - init backend with golang
  - init frontend with react
- part2: simple communication
  - server: create a simple WebSocket server(gorilla/websocket)
  - client: implement to interact with server
- part3: frontend design
  - create a header component
  - create a chat history component
  - feed it some messages
- part4: multiple clients handling
  - improve the codebase by sub-packages
  - implement a pool mechanism using go channels
- part5: frontend design improving
  - create a chat input component
  - create a send message component
  - improve the chat history component
- part6: backend dockerizing
  - create our Dockerfile
  - build our Docker image
  - run Docker to deploy

# run & deploy
- backend
  ```shell
  # in folder backend/
  go run main.go

  # or use Docker
  docker build -t backend .
  docker run -it -p 8080:8080 backend
  ```
- frontend
  ```shell
  # in folder frontend/
  npm start
  ```

# reference
- [Building a Chat Application in Go with ReactJS](https://tutorialedge.net/projects/chat-system-in-go-and-react/)
