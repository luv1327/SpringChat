import React from "react";
import { Layout, Button, Avatar } from "antd";
import { ArrowLeftOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Header } = Layout;

const ChatPageNavbar = ({ username }) => {
  return (
    <Header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        background: "#fff",
        padding: "0 24px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        marginBottom: "16px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/">
            <Button type="link" icon={<ArrowLeftOutlined />} />
          </Link>
          {/* Back button */}
          <div style={{ marginLeft: "8px" }}>
            {" "}
            {/* Add some margin for spacing */}
            <Avatar
              size={40}
              src={"https://robohash.org/8"}
              style={{
                marginRight: "8px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
              }}
            />{" "}
            {/* Avatar */}
            <span style={{ fontSize: "16px" }}>Luv</span>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default ChatPageNavbar;
