import { Outlet, Navigate } from "react-router-dom";
import localStorageAdapter from "../libs/localStorage";
import localStorageKeys from "../config/localStorageKeys";

const PrivateRoutes = () => {
  const token = localStorageAdapter.getLocalStorage(localStorageKeys.JWT_TOKEN);
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
