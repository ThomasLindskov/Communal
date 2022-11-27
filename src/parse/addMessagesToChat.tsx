import Parse from 'parse';
import { getObject } from './getObject';


export const addMessagesToChat = async function (payload: any) {
    try {
        let chat = await getObject('Chat', payload.chatid)
        let user = await getObject('User', localStorage.getItem('currentUserObjectId'))
        if(chat){
            let message = new Parse.Object('Message')
            message.set('text', payload.text)
            message.set('chat', chat.toPointer())
            message.set('chat', user?.toPointer())
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