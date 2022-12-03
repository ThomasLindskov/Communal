import Parse from "parse";

export const getObject = async function (className: string, id: string | null) {
  if (!id) {
    return;
  }
  try {
    const query = new Parse.Query(className);
    const object = await query.get(id);
    return object;
  } catch (error) {
    // Error can be caused by lack of value selection
    console.log(error);
  }
};
