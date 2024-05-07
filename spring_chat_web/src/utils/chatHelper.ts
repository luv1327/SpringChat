const formatRecievedMessage = (message) => {
  const { content, date, receiverId, groupId, senderId, type } = message;
  const newMessage = {
    senderId: senderId,
    type: type,
    text: content,
    timestamp: date,
  };
  return newMessage;
};

const convertChatsToMap = (chatsArray) => {
  chatsArray.forEach((chat) => {
    chatsMap[chat.title] = chat;
    chat.messages = [];
  });
};

export { formatRecievedMessage, convertChatsToMap };
