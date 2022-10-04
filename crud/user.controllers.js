const uuid = require("uuid");

const usersDB = [
  {
    id: uuid.v4(),
    first_name: "Jose",
    last_name: "Carrero",
    email: "josecarrero@gmail.com",
    password: "Jose123",
    birthday: "1999/08/25",
  },
  {
    id: uuid.v4(),
    first_name: "kateryn",
    last_name: "ramos",
    email: "kateramos@gmail.com",
    password: "Kate123",
    birthday: "1998/01/31",
  },
  {
    id: uuid.v4(),
    first_name: "daniel",
    last_name: "Carrero",
    email: "daniel@gmail.com",
    password: "Daniel123",
    birthday: "2007/01/29",
  },
];

const getAllUser = () => {
  return usersDB;
};

const getUsersById = (id) => {
  const data = usersDB.find((task) => task.id === id);
  return data;
};

const createUser = (first_name, last_name, email, password, birthday) => {
  const newUser = {
    id: uuid.v4(),
    first_name,
    last_name,
    email,
    password,
    birthday,
  };
  usersDB.push(newUser);
  return newUser;
};

module.exports = {
  getAllUser,
  getUsersById,
  createUser,
};
