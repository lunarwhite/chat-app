package main

import (
	"fmt"
	"net/http"

	"github.com/lunarwhite/chat-app/pkg/websocket"
)

// define a WebSocket endpoint.
func serveWs(pool *websocket.Pool, w http.ResponseWriter, r *http.Request) {
	fmt.Println("WebSocket Endpoint Hit")
	conn, err := websocket.Upgrade(w, r)
	if err != nil {
		fmt.Fprintf(w, "%+v\n", err)
	}

	// create a new client on every connection.
	client := &websocket.Client{
		Conn: conn,
		Pool: pool,
	}

	// register that client with a pool.
	pool.Register <- client
	client.Read()
}

// mape our `/ws` endpoint to the `serveWs` function.
func setupRoutes() {
	pool := websocket.NewPool()
	go pool.Start()

	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		serveWs(pool, w, r)
	})
}

func main() {
	fmt.Println("Chat App v0.01")
	setupRoutes()
	http.ListenAndServe(":8080", nil)
}
