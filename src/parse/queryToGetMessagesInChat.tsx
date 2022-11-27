import Parse from 'parse';


export const getMessagesInChat =  function (chatid: any) {
        const parseQuery = new Parse.Query('Message');
        const chat = new Parse.Object('Chat')
        chat.id = chatid
        parseQuery.equalTo('chat', chat);
        parseQuery.includeAll();
        parseQuery.ascending("createdAt");
        return parseQuery
  };