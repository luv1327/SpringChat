import { useEffect, useState } from "react";
import { socketConnector, stompClient } from "./utils/socketConnector";
import { Client } from "stompjs";
import { Button, Input } from "antd";

const App = () => {
  const [webSocketStatus, setWebSocketStatus] = useState(false);
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState("");

  const handleOnPublicMessageRecieved = (message) => {
    console.log("Public", message);
    setMessages(messages + message.body + "\n");
  };
  const handlePersonalMessageRecieved = (message) => {
    console.log("personal message recieved", message);
  };
  const handleConnectionSuccess = () => {
    setWebSocketStatus(true);
    stompClient.subscribe("/chatroom/public", handleOnPublicMessageRecieved);
    stompClient.subscribe(
      `/user/${userName}/private`,
      handlePersonalMessageRecieved
    );
  };
  const handleConnectionError = (e) => {
    console.log(e);
    setWebSocketStatus(false);
  };
  const connectWebSocket = () => {
    socketConnector.initializeWebSocketConnection(
      handleConnectionSuccess,
      handleConnectionError
    );
  };

  const registerUser = () => {
    connectWebSocket();
  };

  const onSendMessage = () => {
    stompClient.send(
      `/app/chatroom/public`,
      {},
      JSON.stringify({ message: message })
    );
    setMessage("");
  };

  return (
    <div className="App">
      {!webSocketStatus ? (
        <>
          <Input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Button type="primary" onClick={registerUser}>
            Register
          </Button>
        </>
      ) : (
        <>
          <Input value={message} onChange={(e) => setMessage(e.target.value)} />
          <Button type="primary" onClick={onSendMessage}>
            Send
          </Button>

          <p>ajsaksmalsas a;lsma;s,a;</p>
        </>
      )}
    </div>
  );
};

export default App;
