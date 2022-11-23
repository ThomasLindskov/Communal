import Parse from 'parse/dist/parse.min.js';


export const createPrivateChat = async function (userids: Array<string>): Promise<boolean> {
    try {
        const query = new Parse.Query("User");
        let userArray: Parse.Object<Parse.Attributes>[] = []; 
        let name = '';
        for (let index = 0; index < userids.length; index++) {
            let user = await query.get(userids[index]);
            name += user.attributes.username + " ";
            userArray.push(user)
        }

        
        const chatTypeValue: string = 'private';
        const chatNameValue: string = name;

        let chat: Parse.Object = new Parse.Object('Chat');
        chat.set('type', chatTypeValue)
        chat.set('name', chatNameValue)

      // MANY-TO-MANY (N:N)
      // Create a new relation so data can be added
      let chatRelation = chat.relation('users');
      // bookAuthorsObjects is an array of Parse.Objects,
      // you can add to relation by adding the whole array or object by object
      chatRelation.add(userArray);
  
      // After setting the values, save it on the server
      try {
        let result = await chat.save();
        console.log(result)
        return true;
      } catch (error) {
        // Error can be caused by lack of Internet connection
        console.log(error)
        return false;
      }
    } catch (error) {
      // Error can be caused by lack of value selection
      console.log(error)
      return false;
    }
  };