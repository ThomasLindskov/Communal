import Parse from "parse";

// TODO: update below argument type to File
export const uploadImage = async (image: any): Promise<boolean> => {
  const userId = localStorage.getItem("currentUserObjectId");

  let updatedUser: Parse.Object = new Parse.Object("User");
  updatedUser.set("objectId", userId);

  updatedUser.set("image", new Parse.File(image.name, image));
  updatedUser.set("username", "fish");

  try {
    // TODO: image upload is successful, but user is not updated
    await updatedUser.save();
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
