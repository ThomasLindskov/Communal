import Parse from 'parse';
import { getObject } from './getObject';


export const addMemberToChat = async function (chatid: string, userToAdd: string) {
    try {
        let chat = await getObject('Chat', chatid)
        if(chat){
          let chatUsersRelation = chat.relation('users');
          let user = await getObject('User', userToAdd);
          if(user){
            chatUsersRelation.add([user]);
            try {
              await chat.save();
              return true;
            } catch (error) {
              console.log(error)
              return false;
            }
          } 
        } 
    } catch (error) {
      // Error can be caused by lack of value selection
      console.log(error)
    }
  };