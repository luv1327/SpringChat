import { useState } from "react";
import { Input, Button } from "antd";
import { SendOutlined } from "@ant-design/icons";
const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message !== "") {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <Input
      onPressEnter={handleSend}
      suffix={
        <Button type="primary" icon={<SendOutlined />} onClick={handleSend} />
      }
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      placeholder="Type your message here..."
      style={{ position: "fixed", bottom: 0 }} // Adjust width as needed
    />
  );
};

export default ChatInput;
