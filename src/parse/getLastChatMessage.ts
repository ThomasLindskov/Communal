export const getLastChatMessage = async (
  chat: Parse.Object
): Promise<Parse.Object> => {
  const Message = new Parse.Query("Message");
  Message.equalTo("chat", chat);
  Message.descending("createdAt");
  const message = await Message.first();
  if (message) {
    return message;
  } else {
    const emptyMessage = new Parse.Object("Message");
    emptyMessage.set("text", "");
    return emptyMessage;
  }
};
