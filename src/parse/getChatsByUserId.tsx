import Parse from "parse/dist/parse.min.js";
import { getObject } from "./getObject";

export const getChatsByUserId = async function (payload: any) {
  try {
    const parseQuery = new Parse.Query("Chat");
    let user = await getObject("User", payload.userid);
    parseQuery.equalTo("users", user);
    const chats = await parseQuery.find();
    return chats;
  } catch (error) {
    // Error can be caused by lack of value selection
    console.log(error);
    return [];
  }
};
