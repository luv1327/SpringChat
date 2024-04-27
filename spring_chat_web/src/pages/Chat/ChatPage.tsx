import React, { useEffect, useRef } from "react";
import { Input, Button } from "antd";
import { SendOutlined } from "@ant-design/icons";
import { MessageBox } from "react-chat-elements";
import { messages } from "../../utils/dummyData";
import ChatInput from "../../components/ChatInput";
import ChatPageHeader from "../../components/ChatPageHeader";
import { useNavigate, useParams } from "react-router-dom";

const ChatPage = () => {
  const { id } = useParams();
  const chatContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the chat window
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages]);

  const handleSendMessage = (message) => {
    alert(message);
  };

  const navigate = useNavigate();
  const onGoBack = () => {
    navigate("/");
  };

  return (
    <div style={{ position: "relative", paddingBottom: 50 }}>
      <ChatPageHeader name={id} onBack={onGoBack} />
      <div style={{ paddingBottom: 20 }}>
        {messages.reverse().map((message, index) => (
          <MessageBox
            key={index}
            position={message.position}
            type={message.type}
            text={message.text}
          />
        ))}
      </div>
      <div
        style={{
          borderTop: "1px solid grey",
          position: "fixed",
          bottom: 0,
          width: "100%",
          backgroundColor: "#fff",
        }}
      >
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
      <div ref={chatContainerRef}></div>
    </div>
  );
};

export default ChatPage;
