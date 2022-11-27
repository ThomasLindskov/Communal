// Import Parse minified version
import Parse from "parse/dist/parse.min.js";

export async function initializeParse() {
  const PARSE_APPLICATION_ID = "tBlisorMwnwbaQOBjycePqPuEJo03jnMul3ipbcE";
  const PARSE_HOST_URL = "https://parseapi.back4app.com/";
  const PARSE_JAVASCRIPT_KEY = "uOXwZokdRMhfAUPRQ1r7olvJDj8EmZY1vMvaOKiH";
  Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
  Parse.serverURL = PARSE_HOST_URL;
}
