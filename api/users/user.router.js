const { createUser, getUserById, getUsers, updateUser, deleteUser, login } = require('./user.controller');

const r = require("express").Router();

//use middleware 
const { checkToken } = require('../../auth/token_validation');

r.post("/", checkToken, createUser);
r.get("/", checkToken, getUsers);
r.get("/:id", checkToken, getUserById);
r.patch("/", checkToken, updateUser);
r.delete("/", checkToken, deleteUser);
r.post("/login", login);

module.exports = r;
