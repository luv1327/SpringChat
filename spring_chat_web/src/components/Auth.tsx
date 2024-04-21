import { useContext } from "react";
import { MainContext } from "../context/MainContext";
import ChatList from "./ChatList";
import Login from "./Login";

const Auth = () => {
  const { user } = useContext(MainContext);
  if (user) {
    return <ChatList />;
  }
  return <Login />;
};

export default Auth;
