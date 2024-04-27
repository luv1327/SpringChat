import { Button } from "antd";
import "./AuthPage.css"; // Import custom CSS for styling

const AuthPage = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Welcome to Spring Chat</h2>
        <div className="button-container">
          <Button type="primary" className="login-button" block href="/login">
            Log in
          </Button>
          <Button
            type="default"
            className="signup-button"
            block
            href="/sign-up"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
