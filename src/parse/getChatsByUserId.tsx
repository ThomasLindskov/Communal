import Parse from "parse";
import { getObject } from "./getObject";
import { chatType } from "src/pages/chats/ChatsPage";

// TODO: refactor to only fetch private chats
export const getChatsByUserId = async function (
  userid: string,
  type: chatType
) {
  try {
    const parseQuery = new Parse.Query("Chat");
    let user = await getObject("User", userid);
    parseQuery.equalTo("type", type === chatType.Group ? "group" : "private");
    parseQuery.equalTo("users", user);
    const chats = await parseQuery.find();

    return chats;
  } catch (error) {
    // Error can be caused by lack of value
    // TODO: potentially add toast to give users visual feedback
    console.log(error);
    return [];
  }
};
