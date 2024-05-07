import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPage from "../pages/Login/LoginPage";
import ChatPage from "../pages/Chat/ChatPage";
import PrivateRoutes from "./PrivateRoutes";
import SignUpPage from "../pages/SignUp/SignUpPage";
import { useContext, useEffect } from "react";
import { MainContext } from "../context/MainContext";
import localStorageKeys from "../config/localStorageKeys";
import localStorageAdapter from "../libs/localStorage";
import apiService from "../apis/apiService";
import apiStatuses from "../apis/apiStatuses";
import ChatListPage from "../pages/ChatList/ChatListPage";
import useCustomMessage from "../hooks/useCustomMessage";

const AppNavigation = () => {
  const { user, setUser } = useContext(MainContext);
  const { showError } = useCustomMessage();
  const handleLoginCheck = async () => {
    try {
      const bearerToken = localStorageAdapter.getLocalStorage(
        localStorageKeys.JWT_TOKEN
      );
      if (bearerToken) {
        const response = await apiService.loginCheck();
        const { status, responseData, message } = response;
        if (status === apiStatuses.success) {
          const { jwt } = responseData;
          localStorageAdapter.setLocalStorage(localStorageKeys.JWT_TOKEN, jwt);
          setUser(responseData);
        } else if (status === apiStatuses.failed) {
          localStorageAdapter.clearLocalStorage();
          setUser(null);
          showError(message);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    handleLoginCheck();
  }, []);
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<ChatListPage />} path="/" />
          <Route element={<ChatPage />} path="/:id" />
        </Route>
        <Route element={<LoginPage />} path="/login" />
        <Route element={<SignUpPage />} path="/sign-up" />
      </Routes>
    </Router>
  );
};

export default AppNavigation;
