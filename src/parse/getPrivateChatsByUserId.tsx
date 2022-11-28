import Parse from "parse";
import { getObject } from "./getObject";

export const getPrivateChats = async function (userId: string) {
  try {
    const parseQuery = new Parse.Query("Chat");
    let user = await getObject("User", userId);
    parseQuery.equalTo("type", "private");
    parseQuery.equalTo("users", user);
    const chats = await parseQuery.find();

    for (let i = 0; i < chats.length; i++) {
      chats[i]
        .relation("users")
        .query()
        .each(function (user) {
          if (user.id !== userId) {
            chats[i].set("receiver", user);
          }
        });
    }

    return chats;
  } catch (error) {
    console.log(error);
  }
};
