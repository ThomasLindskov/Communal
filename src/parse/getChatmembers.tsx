import Parse from 'parse';
import { getObject } from './getObject';


export const getChatMembers = async function (chatid: string) {
    try {
        let chat = await getObject('Chat', chatid)
        if(chat){
          let chatUsersRelation = chat.relation('users');
          let relationQuery = chatUsersRelation.query()
          let users = await relationQuery.find();
          return users;
        } 
    } catch (error) {
      // Error can be caused by lack of value selection
      console.log(error)
    }
  };