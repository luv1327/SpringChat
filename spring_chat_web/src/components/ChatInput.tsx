import { useRef } from "react";
import { Input, Button } from "antd";
import { SendOutlined } from "@ant-design/icons";
const ChatInput = ({ onSendMessage }) => {
  const inputRef = useRef(null);

  const handleSend = () => {
    const message = inputRef.current.state.value.trim();
    if (message !== "") {
      onSendMessage(message);
      inputRef.current.setState({ value: "" }); // Clear input
    }
  };

  return (
    <Input
      ref={inputRef}
      onPressEnter={handleSend}
      suffix={
        <Button type="primary" icon={<SendOutlined />} onClick={handleSend} />
      }
      placeholder="Type your message here..."
      style={{ position: "fixed", bottom: 0 }} // Adjust width as needed
    />
  );
};

export default ChatInput;
