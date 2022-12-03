import Parse from "parse";

export const getObjectReference =  function (className: string, id: string | null) {
    let parseObj;
    if(className === 'User'){
        parseObj = new Parse.User();
    } else {
        parseObj = new Parse.Object(className);
    }
    if(id){
        parseObj.id  = id;
    }
    return parseObj;
};
