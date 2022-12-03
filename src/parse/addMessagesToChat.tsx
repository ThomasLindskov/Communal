import Parse from 'parse';
import { getObjectReference } from './getObjectReference';


export const addMessagesToChat = async function (chatid: string, text: string) {
        let chat = getObjectReference('Chat', chatid)
        let user = getObjectReference('User', localStorage.getItem('currentUserObjectId'))
        let message = new Parse.Object('Message')
        message.set('text', text)
        message.set('chat', chat.toPointer())
        message.set('sender', user.toPointer())
        try {
            await message.save();
            return true;
        } catch (error) {
            console.log(error)
            return false;
        }    
  };