import { Client, over } from "stompjs";
import SockJS from "sockjs-client";
let stompClient: Client;
const socketConnector = {
  initializeWebSocketConnection: function (onConnected, onError) {
    let header = {
      "sender-name": "sendername",
      suuid: "bb2c9039-0ed3-4d6f-b078-db965286944d",
      ruuid: "bb2c9039-0ed3-4d6f-b078-db965286944d",
      "jwt-token": "my-jwt-token",
    };
    const webSocketClientUrl = "http://localhost:8080/app/gs-guide-websocket";
    const socket = new SockJS(webSocketClientUrl);
    stompClient = over(socket);
    stompClient.connect(header, onConnected, onError);
  },
};

export { socketConnector, stompClient };
