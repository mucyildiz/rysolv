const { v4: uuidv4 } = require('uuid');
const {
  createUser,
  getUsers,
  getOneUser,
  deleteUser,
  transformUser,
} = require('../../db');

module.exports = {
  getUsers: async () => {
    try {
      const result = await getUsers('users');
      return result;
    } catch (err) {
      throw err;
    }
  },
  oneUser: async args => {
    const { id } = args;
    try {
      const [result] = await getOneUser('users', id);
      return result;
    } catch (err) {
      throw err;
    }
  },
  createUser: async args => {
    const { userInput } = args;
    const issue = [
      [
        uuidv4(),
        new Date(),
        new Date(),
        userInput.first_name,
        userInput.last_name,
        userInput.email,
        userInput.watching_list || [],
        userInput.rep || 0,
        userInput.profile_pic,
        userInput.active_number,
        userInput.issues_number,
        userInput.username,
      ],
    ];
    try {
      const result = await createUser(issue);
      return result;
    } catch (err) {
      throw err;
    }
  },
  transformUser: async args => {
    const { id, userInput } = args;
    try {
      const data = {
        modified_date: new Date(), // update modified date
        first_name: userInput.firstName,
        last_name: userInput.lastName,
        email: userInput.email,
        watching_list: userInput.watchingList,
        rep: userInput.rep,
        profile_pic: userInput.profilePic,
        active_number: userInput.activeNumber,
        issues_number: userInput.issuesNumber,
        username: userInput.username,
      };
      const result = await transformUser('users', id, data);
      return result;
    } catch (err) {
      throw err;
    }
  },
  deleteUser: async args => {
    const { id } = args;
    try {
      const result = await deleteUser('users', id);
      return result;
    } catch (err) {
      throw err;
    }
  },
};
