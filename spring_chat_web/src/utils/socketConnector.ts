import { Client } from "stompjs";

let stompClient: Client;

const socketConnector = {
  initializeWebSocketConnection: async function (
    onConnected = () => {},
    onError = () => {}
  ) {
    onConnected();
    onError();
    // console.log(
    //   (await axios.get("http://localhost:8080/app/gs-guide-websocket")).data
    // );
    // const webSocketClientUrl = "http://localhost:8080/app/gs-guide-websocket";
    // const socket = new SockJS(webSocketClientUrl);
    // console.log(socket);
    // const stompClient = over(ws);
    // const headers = { Authorization: `Bearer alsasaas` };
    // stompClient.connect(headers, onConnected, onError);
    // const webSocketClientUrl = "http://localhost:8080/app/gs-guide-websocket";
    // const socket = new SockJS(webSocketClientUrl).pa
    // console.log(socket);
    // stompClient = over(socket);
    // stompClient.connect(header, onConnected, onError);
  },
};

export { socketConnector, stompClient };
