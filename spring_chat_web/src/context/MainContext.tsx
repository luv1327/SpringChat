import { createContext, useState } from "react";
import { Client } from "@stomp/stompjs";
import endpoints from "../apis/endpoints";
import apiStatuses from "../apis/apiStatuses";
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";

const MainContext = createContext();

let wsClient: Client;

const MainProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [chatsList, setChatsList] = useState([]);
  const [messages, setMessages] = useState([]);
  const [currentChatId, setCurrentChatId] = useState("luv");
  const [api, contextHolder] = notification.useNotification();
  const showMessageRecievedNotification = (messageData) => {
    const { content, senderId } = messageData;
    api.open({
      message: senderId,
      description: content,
      icon: <SmileOutlined style={{ color: "#108ee9" }} />,
    });
  };

  console.log(chatsList);
  const subscribeToPrivateMessage = () => {
    const personalMessageTopic = `/user/${user?.id}/receive-private-message`;
    wsClient.subscribe(personalMessageTopic, (response) => {
      const data = JSON.parse(response.body);
      const { status, responseData } = data;
      if (status === apiStatuses.success) {
        const { messageData } = responseData;
        showMessageRecievedNotification(messageData);
        const pathname = window.location.pathname.split("");
        const id = pathname.length > 0 ? pathname[1] : "";
        handleUpdateChatsList(id);
        // if (!id) {
        //   handleUpdateChatsList(messageData);
        // }
        // if (id && id === messageData.senderId) {
        //   handleUpdateMessagesList(messageData);
        // } else {
        //   handleUpdateChatsList(messageData);
        // }
      }
    });
  };

  const handleUpdateChatsList = (messageData) => {
    console.table([...chatsList]);
    // const { content, date, senderId } = messageData;
    // const newChatList = chatsList.map((singleChatUser) => {
    //   console.log(singleChatUser);
    //   //   if (singleChatUser.id == messageData.senderId) {
    //   //     //   let newData = {
    //   //     //       ...singleChatUser,
    //   //     //       lastMessage : messageData.content,
    //   //     //       lastMessageDate : messageData.date
    //   //     //   }
    //   //     console.log(singleChatUser);
    //   //     return singleChatUser;
    //   //   }
    //   //   return singleChatUser;
    // });
  };

  const handleUpdateMessagesList = (messageData) => {
    setMessages((prevState) => [...prevState, messageData]);
  };

  const sendMessage = (messageData) => {
    const messageBody = JSON.stringify(messageData);
    // wsClient.publish({ destination: "/app/send-message", body: messageBody });
    wsClient.publish({
      destination: "/app/send-private-message",
      body: messageBody,
    });
  };

  const connectToChatServer = () => {
    if (!wsClient) {
      wsClient = new Client({
        webSocketFactory: () => new WebSocket(endpoints.webSocketConnectionUrl),
        debug: (str) => console.log(str),
        onConnect: () => {
          subscribeToGroupMessage();
          subscribeToPrivateMessage();
        },
      });
      wsClient.activate();
    }
  };

  const subscribeToGroupMessage = () => {
    wsClient.subscribe("/group-chat/receive-message", (message) =>
      console.log(`Received: ${message.body}`)
    );
  };

  const value = {
    user,
    setUser,
    connectToChatServer,
    sendMessage,
    chatsList,
    setChatsList,
    messages,
    setMessages,
    currentChatId,
    setCurrentChatId,
  };
  return (
    <MainContext.Provider value={value}>
      {children}
      {contextHolder}
    </MainContext.Provider>
  );
};

export { MainContext, MainProvider };
