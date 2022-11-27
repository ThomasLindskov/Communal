import Parse from "parse/dist/parse.min.js";
import { getObject } from "./getObject";

export const createGroupChat = async function (
  name: string,
  neighborhood: number
): Promise<boolean> {
  try {
    let chat: Parse.Object = new Parse.Object("Chat");
    chat.set("type", "group");
    chat.set("name", name);
    let chatRelation = chat.relation("users");
    //chatRelation.add(userArray);

    try {
      let result = await chat.save();
      console.log(result);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
