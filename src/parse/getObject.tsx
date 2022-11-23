import Parse from 'parse/dist/parse.min.js';


export const getObject = async function (className: string, id: any) {
  if(!id){
    return;
  }
    try {
        const query = new Parse.Query(className);
        let user = await query.get(id);
        return user; 

    } catch (error) {
      // Error can be caused by lack of value selection
      console.log(error)
    }
  };