import Parse from 'parse/dist/parse.min.js';


export const getChatsByUserId = async function (userid: string) {
    try {
        const parseQuery = new Parse.Query('Chat');
        const query = new Parse.Query("User");
        let user = await query.get(userid);
        parseQuery.equalTo('users', user);
        const chats = await parseQuery.find();
        return chats
    } catch (error) {
      // Error can be caused by lack of value selection
      console.log(error)
      return false;
    }
  };