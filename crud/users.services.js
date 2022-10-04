const { getAllUser, getUsersById, createUser } = require("./user.controllers");

const getUsers = (req, res) => {
  const data = getAllUser();
  res.status(200).json(data);
};

const getUserById = (req, res) => {
  const id = req.params.id;
  const data = getUsersById(id);
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ id: id, message: "invalid ID, please try again " });
  }
};

const createNewUser = (req, res) => {
  const data = req.body;
  if (
    data.first_name &&
    data.last_name &&
    data.email &&
    data.password &&
    data.birthday
  ) {
    const DB = createUser(
      data.id,
      data.first_name,
      data.last_name,
      data.email,
      data.password,
      data.birthday
    );
    res.status(201).json(DB);
  } else {
    res.status(400).json({ message: "missing data" });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createNewUser,
};
