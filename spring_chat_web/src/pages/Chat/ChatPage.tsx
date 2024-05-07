import { useContext, useEffect, useRef, useState } from "react";
import { MessageBox } from "react-chat-elements";
import ChatInput from "../../components/ChatInput";
import ChatPageHeader from "../../components/ChatPageHeader";
import { useNavigate, useParams } from "react-router-dom";
import { dummyMessages } from "../../utils/dummyData";
import { MainContext } from "../../context/MainContext";
import apiService from "../../apis/apiService";
import apiStatuses from "../../apis/apiStatuses";
import useCustomMessage from "../../hooks/useCustomMessage";
import FullScreenLoading from "../../components/FullScreenLoading";

const ChatPage = () => {
  const { id } = useParams();
  const { showError } = useCustomMessage();
  const [isLoading, setIsLoading] = useState(true);
  const chatContainerRef = useRef(null);
  const {
    sendMessage,
    user,
    currentChatId,
    setCurrentChatId,
    messages,
    setMessages,
  } = useContext(MainContext);

  const getAllMessages = async () => {
    try {
      const response = await apiService.getAllMessages(id);
      const { status, responseData } = response;
      if (status === apiStatuses.success) {
        const { messages } = responseData;
        setMessages(messages);
      }
    } catch (e) {
      showError("Oops! Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the chat window
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages]);

  useEffect(() => {
    getAllMessages();
  }, []);

  const handleSendMessage = (message) => {
    const messageData = {
      content: message,
      date: new Date(),
      receiverId: id,
      groupId: "",
      senderId: user.id,
      type: "text",
    };
    sendMessage(messageData);
    setMessages((prevMessages) => {
      return [
        ...prevMessages,
        {
          timestamp: new Date(),
          type: "text",
          content: message,
          senderId: user.id,
        },
      ];
    });
  };

  const navigate = useNavigate();
  const onGoBack = () => {
    navigate("/");
  };

  const getMessagePosition = (sender_id) => {
    if (sender_id == user.id) {
      return "right";
    }
    return "left";
  };

  if (isLoading) {
    return <FullScreenLoading />;
  }

  return (
    <>
      <div style={{ position: "relative", paddingBottom: 50 }}>
        <ChatPageHeader name={id} onBack={onGoBack} />
        <div style={{ paddingBottom: 20 }}>
          {messages.map((message, index) => (
            <MessageBox
              key={index}
              position={getMessagePosition(message.senderId)}
              type={message.type}
              text={message.content}
              date={message.timestamp}
            />
          ))}
        </div>
        <div>
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      </div>
      <div ref={chatContainerRef}></div>
    </>
  );
};

export default ChatPage;
