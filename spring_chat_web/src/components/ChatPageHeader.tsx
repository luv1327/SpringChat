import React from "react";
import { Layout, Avatar, Typography, Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

const { Header } = Layout;
const { Title } = Typography;

const ChatPageHeader = ({ name, onBack }) => {
  return (
    <Header
      style={{
        background: "purple",
        padding: "0 16px",
        display: "flex",
        borderBottom: "1px solid #EEE",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1,
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Button type="text" icon={<ArrowLeftOutlined />} onClick={onBack} />
        <div style={{ marginLeft: "10px" }}>
          <Avatar size={40} src="https://example.com/avatar.jpg" />
        </div>

        <div style={{ marginLeft: "10px" }}>
          <Title level={3}>{name}</Title>
        </div>
      </div>
    </Header>
  );
};

export default ChatPageHeader;
