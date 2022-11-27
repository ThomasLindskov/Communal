import { parse } from 'node:path/win32';
import Parse from 'parse/dist/parse.min.js';
import { Await } from 'react-router-dom';
import { getObject } from './getObject';


export const getMessagesInChat =  function (chatid: any) {
        const parseQuery = new Parse.Query('Message');
        const chat = new Parse.Object('Chat')
        chat.id = chatid
        parseQuery.equalTo('chat', chat);
        parseQuery.includeAll();
        parseQuery.ascending("createdAt");
        return parseQuery
  };