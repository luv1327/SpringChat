import { useContext, useState } from "react";
import { Input, Button, Avatar } from "antd";
import "./SignUpPage.css"; // Import custom styles for sign-up page
import useCustomMessage from "../../hooks/useCustomMessage";
import apiService from "../../apis/apiService";
import apiStatuses from "../../apis/apiStatuses";
import { getRandomAvatars } from "../../utils/dummyData";
import { validateSignUpForm } from "../../utils/validations";
import { NavigateOptions, useNavigate } from "react-router-dom";
import { MainContext } from "../../context/MainContext";
import localStorageKeys from "../../config/localStorageKeys";
import localStorageAdapter from "../../libs/localStorage";

const SignUpPage = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(MainContext);
  const [avatars, setAvatars] = useState(getRandomAvatars(10));
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { showSuccess, showError } = useCustomMessage();

  const handleSignUp = async () => {
    try {
      localStorageAdapter.setLocalStorage(localStorageKeys.JWT_TOKEN, "");
      setIsLoading(true);
      const data = {
        username: username,
        password: password,
        confirmPassword: confirmPassword,
        avatarUrl: selectedAvatar ? selectedAvatar.url : "",
      };
      const validationResponse = validateSignUpForm(data);
      if (validationResponse.status) {
        const response = await apiService.signUp(data);
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

  const handleRegenerateAvatars = () => {
    setAvatars(getRandomAvatars(10));
    setSelectedAvatar(null);
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2 className="signup-title">Sign Up</h2>
        <Input
          className="signup-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <Input.Password
          className="signup-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input.Password
          className="signup-input"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <h3 className="avatar-title">Choose Your Profile Avatar</h3>
        <div className="avatar-list">
          {avatars.map((avatar) => (
            <Avatar
              key={avatar.id}
              src={avatar.url}
              className={`avatar-item ${
                selectedAvatar === avatar ? "selected" : ""
              }`}
              onClick={() => setSelectedAvatar(avatar)}
              size={64} // Set avatar size to 64px
              shape="circle" // Make avatars circular
            />
          ))}
        </div>
        <Button
          type="primary"
          loading={isLoading}
          onClick={handleSignUp}
          className="signup-button"
          block
        >
          Sign Up
        </Button>
        <Button
          className="regenerate-button"
          onClick={handleRegenerateAvatars}
          block
        >
          Regenerate Avatars
        </Button>
        <div className="login-link">
          <span className="login-link-label">Already have an account? </span>
          <a href="/login" className="login-link-btn">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
