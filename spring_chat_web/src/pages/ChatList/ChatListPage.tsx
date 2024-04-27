import { useState } from "react";
import { ChatItem } from "react-chat-elements";
import { useNavigate } from "react-router-dom";
import apiService from "../../apis/apiService";
import useCustomMessage from "../../hooks/useCustomMessage";
import { Button } from "antd";
import SockJS from "sockjs-client";
import { over } from "stompjs";
import localStorageAdapter from "../../libs/localStorage";
import localStorageKeys from "../../config/localStorageKeys";
import { socketConnector } from "../../utils/socketConnector";

let stompClient = null;

const ChatListPage = () => {
  const { showError } = useCustomMessage();
  const [chatList, setChatList] = useState([]);

  const onConnectionSuccess = (res) => {
    console.log("Succes from onConnectionSuccess", res);
  };

  const onConnectionFailure = (e) => {
    console.log("Error from onConnectionFailure", e);
  };

  const connectToChatServer = () => {
    socketConnector.initializeWebSocketConnection(
      onConnectionSuccess,
      onConnectionFailure
    );
    // const webSocketClientUrl = "http://localhost:8080/app/gs-guide-websocket";
    // const socket = new SockJS(webSocketClientUrl);
    // stompClient = over(socket);
    // stompClient.connect({}, onConnectionSuccess, onConnectionFailure);
  };

  const subscribeToPersonalChat = () => {};

  const subscribeToGroupChat = () => {};

  const [isLoading, setIsLoading] = useState(false);
  const getChatList = async () => {
    try {
      const response = await apiService.getChatList();
      console.log(response);
    } catch (e) {
      showError("Oops! Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  const navigate = useNavigate();
  const handleItemPress = (chatItem) => {
    navigate(`/${chatItem.name}`);
  };

  //   if (isLoading) {
  //     return <FullScreenLoading />;
  //   }

  //   return chatList.map((chatItem, index) => (
  //     <ChatItem
  //       onClick={() => handleItemPress(chatItem)}
  //       key={index.toString()}
  //       avatar={chatItem.avatar}
  //       alt={"Avatar"}
  //       title={chatItem.name}
  //       subtitle={chatItem.lastMessage}
  //       date={new Date(chatItem.lastActive)}
  //       unread={10}
  //     />
  //   ));
  return <Button onClick={connectToChatServer}>Connect</Button>;
};

export default ChatListPage;
