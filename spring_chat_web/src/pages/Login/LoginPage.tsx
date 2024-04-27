import { Input, Button } from "antd";
import "./LoginPage.css"; // Import custom styles for login page
import { useContext, useState } from "react";
import apiService from "../../apis/apiService";
import apiStatuses from "../../apis/apiStatuses";
import useCustomMessage from "../../hooks/useCustomMessage";
import { validateLoginForm } from "../../utils/validations";
import { MainContext } from "../../context/MainContext";
import localStorageAdapter from "../../libs/localStorage";
import localStorageKeys from "../../config/localStorageKeys";
import { NavigateOptions, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { user } = useContext(MainContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useContext(MainContext);
  const { showSuccess, showError } = useCustomMessage();
  const handleLogin = async () => {
    try {
      localStorageAdapter.setLocalStorage(localStorageKeys.JWT_TOKEN, "");
      setIsLoading(true);
      let data = {
        username: username,
        password: password,
      };
      const validationResponse = validateLoginForm(data);
      if (validationResponse.status) {
        const response = await apiService.login(data);
        const { status, message, responseData } = response;
        if (status === apiStatuses.success) {
          const { jwt } = responseData;
          localStorageAdapter.setLocalStorage(localStorageKeys.JWT_TOKEN, jwt);
          const options: NavigateOptions = {
            replace: true,
          };
          navigate("/", options);
          setUser(responseData);
          showSuccess(message);
        } else {
          showError(message);
        }
      } else {
        showError(validationResponse.message);
      }
    } catch (e) {
      showError("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-title">Welcome Back!</h2>
        <Input
          className="login-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <Input.Password
          className="login-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="primary"
          className="login-button"
          block
          loading={isLoading}
          onClick={handleLogin}
        >
          Log in
        </Button>
        <div className="signup-link">
          <span className="signup-link-label">Don't have an account? </span>
          <a href="/sign-up" className="signup-link-btn">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
