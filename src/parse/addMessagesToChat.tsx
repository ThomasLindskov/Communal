import Parse from 'parse';
import { getObject } from './getObject';


export const addMessagesToChat = async function (chatid: string, text: string) {
    try {
        let chat = await getObject('Chat', chatid)
        let user = await getObject('User', localStorage.getItem('currentUserObjectId'))
        if(chat){
            let message = new Parse.Object('Message')
            message.set('text', text)
            message.set('chat', chat.toPointer())
            message.set('sender', user?.toPointer())
            try {
                await message.save();
                return true;
            } catch (error) {
                console.log(error)
                return false;
            }
        } 
    } catch (error) {
      // Error can be caused by lack of value selection
      console.log(error)
    }
  };