import Parse from 'parse/dist/parse.min.js';
import { getObject } from './getObject';


export const getMessagesInChat = async function (chatid: string) {
    try {
        let chat = await getObject('Chat', chatid)
        const parseQuery = new Parse.Query('Message');
        parseQuery.equalTo('chat', chat);
        let messages = await parseQuery.find();
        return messages
    } catch (error) {
      // Error can be caused by lack of value selection
      console.log(error)
    }
  };