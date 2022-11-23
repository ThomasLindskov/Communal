import Parse from 'parse/dist/parse.min.js';


export const getChatMembers = async function (chatid: string) {
    try {
        const parseQuery = new Parse.Query('Chat');
        let chat = await parseQuery.get('B5LoAjTM1Y');
        let chatUsersRelation = chat.relation('users');
        let relationQuery = chatUsersRelation.query()
        let users = await relationQuery.find();
        return users;
    } catch (error) {
      // Error can be caused by lack of value selection
      console.log(error)
    }
  };