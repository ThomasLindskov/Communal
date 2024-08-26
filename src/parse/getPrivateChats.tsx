import Parse from "parse";
import { getLastChatMessage } from "./getLastChatMessage";
import { getObjectReference } from "./getObjectReference";

export const getPrivateChats = async function () {
  try {
    const userId = localStorage.getItem("currentUserObjectId");
    const parseQuery = new Parse.Query("Chat");
    let user = getObjectReference("User", userId);
    parseQuery.equalTo("type", "private");
    parseQuery.equalTo("users", user);
    const chats = await parseQuery.find();

    await Promise.all(chats.map(async (chat) => {
      const users = await chat.relation("users").query().find();
      const receiver = users.find(user => user.id !== userId);
      if (receiver) {
        chat.set("receiver", receiver);
      }
    
      const lastMessage = await getLastChatMessage(chat);
      chat.set("lastMessage", lastMessage);
    }));

    return chats;
  } catch (error) {
    console.log(error);
  }
};
