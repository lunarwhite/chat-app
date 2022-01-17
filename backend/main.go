package main

import (
	"fmt"
	"net/http"

	"github.com/lunarwhite/chat-app/pkg/websocket"
)

// define a WebSocket endpoint.
// upgrade this connection to a WebSocket connection.
func serveWs(w http.ResponseWriter, r *http.Request) {
	ws, err := websocket.Upgrade(w, r)
	if err != nil {
		fmt.Fprintf(w, "%+V\n", err)
	}

	go websocket.Writer(ws)
	websocket.Reader(ws)
}

// mape our `/ws` endpoint to the `serveWs` function.
func setupRoutes() {
	http.HandleFunc("/ws", serveWs)
}

func main() {
	fmt.Println("Chat App v0.01")
	setupRoutes()
	http.ListenAndServe(":8080", nil)
}
