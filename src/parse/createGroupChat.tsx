import Parse from "parse";

export const createGroupChat = async function (
  name: string,
  neighborhood: number
): Promise<boolean> {
  try {
    const chat: Parse.Object = new Parse.Object("Chat");
    chat.set("type", "group");
    chat.set("name", name);
    chat.set("neighborhood", neighborhood);

    try {
      await chat.save();
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
