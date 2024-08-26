import Parse from "parse";
import { getLastChatMessage } from "./getLastChatMessage";
import { getObject } from "./getObject";

export const getGroupChats = async () => {
  try {
    const currentUser = localStorage.getItem("currentUserObjectId");
    const parseQuery = new Parse.Query("Chat");
    const user = await getObject("User", currentUser);
    if (user) {
      const address = user.get("address");
      const zipCode = address.zipCode;
      const neighborhood = user.get("neighborhood");
      if (neighborhood) {
        parseQuery.equalTo("neighborhood", neighborhood);
      } else {
        parseQuery.equalTo("zipCode", zipCode);
      }
      const chats = await parseQuery.find();

      await Promise.all(chats.map(async (chat) => {
        const lastMessage = await getLastChatMessage(chat);
        chat.set("lastMessage", lastMessage);
      }));
      
      return chats;
    }
  } catch (error) {
    // Error can be caused by lack of value selection
    console.log(error);
    return [];
  }
};
