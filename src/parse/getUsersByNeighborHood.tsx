export const getUsersByNeighborHood = async () => {
  const neighborHood = localStorage.getItem("neighborhood");
  const currentUser = localStorage.getItem("currentUserObjectId");

  if (!neighborHood) {
    return;
  }

  try {
    const parseQuery = new Parse.Query("User");
    parseQuery.equalTo("neighborhood", Number(neighborHood));
    const users = await parseQuery.find();
    const filteredUsers = users.filter((user) => user.id !== currentUser);
    const finalFilteredUsers = filteredUsers.filter(
      (user) => user.id !== "D8QuGkfMOc"
    );
    return finalFilteredUsers;
  } catch (error) {
    console.log(error);
  }
};
