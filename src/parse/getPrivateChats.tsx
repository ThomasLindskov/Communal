import Parse from "parse";
import { getLastChatMessage } from "./getLastChatMessage";
import { getObject } from "./getObject";

export const getPrivateChats = async function () {
  try {
    const userId = localStorage.getItem("currentUserObjectId");
    const parseQuery = new Parse.Query("Chat");
    let user = await getObject("User", userId);
    parseQuery.equalTo("type", "private");
    parseQuery.equalTo("users", user);
    //parseQuery.include("users");
    const chats = await parseQuery.find();

    for (let i = 0; i < chats.length; i++) {
      await chats[i]
        .relation("users")
        .query()
        .each(function (user) {
          if (user.id !== userId) {
            chats[i].set("receiver", user);
          }
        });

      const lastMessage = await getLastChatMessage(chats[i]);
      chats[i].set("lastMessage", lastMessage);
    }

    return chats;
  } catch (error) {
    console.log(error);
  }
};
