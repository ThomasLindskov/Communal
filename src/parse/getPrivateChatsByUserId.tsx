import Parse from "parse";
import { getObject } from "./getObject";

export const getPrivateChats = async function (userId: string) {
  try {
    const parseQuery = new Parse.Query("Chat");
    let user = await getObject("User", userId);
    parseQuery.equalTo("type", "private");
    parseQuery.equalTo("users", user);
    const chats = await parseQuery.find();

    return chats;
  } catch (error) {
    console.log(error);
  }
};
