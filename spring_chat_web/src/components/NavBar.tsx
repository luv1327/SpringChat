import { useState } from "react";
import { Layout, Modal, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import logo from "../assets/logo.png";

const { Header } = Layout;

const Navbar = () => {
  const [userModalVisible, setUserModalVisible] = useState(false);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

  const showUserModal = () => {
    setUserModalVisible(true);
  };

  const handleUserModalCancel = () => {
    setUserModalVisible(false);
  };

  const showLogoutModal = () => {
    setLogoutModalVisible(true);
  };

  const handleLogoutModalOk = () => {
    // Handle logout logic here
    setLogoutModalVisible(false);
  };

  const handleLogoutModalCancel = () => {
    setLogoutModalVisible(false);
  };

  return (
    <Header
      style={{
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
        <div>
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <img src={logo} alt="Your Logo" style={{ height: "50px" }} />{" "}
            {/* Use your logo */}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button
            type="primary"
            onClick={showUserModal}
            icon={<UserOutlined />}
          >
            Me
          </Button>
          <Button
            type="primary"
            danger
            onClick={showLogoutModal}
            style={{ marginLeft: 16 }}
          >
            Logout
          </Button>
          <Modal
            title="User Details"
            visible={userModalVisible}
            onCancel={handleUserModalCancel}
            footer={[
              <Button key="cancel" onClick={handleUserModalCancel}>
                Close
              </Button>,
            ]}
          >
            {/* Your user details content here */}
            User Details
          </Modal>
          <Modal
            title="Logout"
            visible={logoutModalVisible}
            onOk={handleLogoutModalOk}
            onCancel={handleLogoutModalCancel}
          >
            <p>Are you sure you want to logout?</p>
          </Modal>
        </div>
      </div>
    </Header>
  );
};

export default Navbar;
