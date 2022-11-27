// Import Parse minified version
import Parse from 'parse';
import { initializeParse } from  '@parse/react';


export async function initParse() {
        // Your Parse initialization configuration goes here
    // Note the live query URL instead of the regular server url
    const PARSE_APPLICATION_ID = "tBlisorMwnwbaQOBjycePqPuEJo03jnMul3ipbcE";
    // const PARSE_SERVER_URL = "https://parseapi.back4app.com/";
    const PARSE_LIVE_QUERY_URL = "https://communal.b4a.io/";
    const PARSE_JAVASCRIPT_KEY = "uOXwZokdRMhfAUPRQ1r7olvJDj8EmZY1vMvaOKiH";

        // Initialize parse using @parse/react instead of regular parse JS SDK
        initializeParse(
        PARSE_LIVE_QUERY_URL,
        PARSE_APPLICATION_ID,
        PARSE_JAVASCRIPT_KEY
        );
}

