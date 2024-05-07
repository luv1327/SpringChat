import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiService from "../../apis/apiService";
import useCustomMessage from "../../hooks/useCustomMessage";
import { ChatItem } from "react-chat-elements";
import FullScreenLoading from "../../components/FullScreenLoading";
import { MainContext } from "../../context/MainContext";
import apiStatuses from "../../apis/apiStatuses";
import Navbar from "../../components/NavBar";

const ChatListPage = () => {
  const { user, chatsList, setChatsList, setCurrentChatId } =
    useContext(MainContext);
  const { connectToChatServer } = useContext(MainContext);
  const { showError } = useCustomMessage();

  const [isLoading, setIsLoading] = useState(false);
  const getChatList = async () => {
    try {
      const response = await apiService.getChatList();
      const { status, responseData } = response;
      if (status === apiStatuses.success) {
        const { chats } = responseData;
        setChatsList(chats);
      }
    } catch (e) {
      showError("Oops! Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  const navigate = useNavigate();
  const handleItemPress = (chatItem) => {
    setCurrentChatId(chatItem.id);
    navigate(`/${chatItem.id}`);
  };

  //   const handleLogout = async () => {
  //     try {
  //       localStorageAdapter.clearLocalStorage();
  //       navigate(`/login`);
  //       //   const response = await apiService.logout({});
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  const getDate = (date) => {
    if (date) {
      return new Date(date);
    }
    return "";
  };

  useEffect(() => {
    if (user) {
      connectToChatServer();
      getChatList();
    }
  }, [user]);

  if (isLoading) {
    return <FullScreenLoading />;
  }

  return (
    <div>
      <Navbar />
      {chatsList.map((chatItem, index) => (
        <ChatItem
          onClick={() => handleItemPress(chatItem)}
          key={index.toString()}
          avatar={chatItem.avatar}
          alt={"Avatar"}
          title={chatItem.name}
          subtitle={chatItem.lastMessage}
          date={getDate(chatItem.lastMessageDate)}
        />
      ))}
    </div>
  );
};

export default ChatListPage;
