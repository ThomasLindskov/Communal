import moment from "moment";

export const getLastChatMessage = async (
  chat: Parse.Object
): Promise<Parse.Object> => {
  const Message = new Parse.Query("Message");
  Message.equalTo("chat", chat);
  Message.descending("createdAt");
  const message = await Message.first();
  if (message) {
    message.get("createdAt");
    const lastMessageTimeStamp = moment(message.get("createdAt")).fromNow();
    message.set("timeAsString", lastMessageTimeStamp);

    return message;
  } else {
    const emptyMessage = new Parse.Object("Message");
    emptyMessage.set("timeAsString", "");
    emptyMessage.set("createdAt", new Date(0));

    emptyMessage.set("text", "");
    return emptyMessage;
  }
};
