import Parse from "parse";

export const getObject = async function (className: string, id: string | null) {
  if (!id) {
    return;
  }
  try {
    const query = new Parse.Query(className);
    const user = await query.get(id);
    return user;
  } catch (error) {
    // Error can be caused by lack of value selection
    console.log(error);
  }
};
