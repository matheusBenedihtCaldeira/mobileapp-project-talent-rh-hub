"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var _userModelsjs = require("../../models/user/UserModels.js");

var _ProfileModelsjs = require("../../models/profile/ProfileModels.js");

//Controller responsavel por listar todas os users da base de dados
const index = async (req, res) => {
  try {
    const users = await _userModelsjs.selectUsers.call(void 0);
    res.json(users);
  } catch (err) {
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};
exports.index = index;

//Controller responsavel por recuperar um user a partir do ID
const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await _userModelsjs.selectUserById.call(void 0, id);
    res.status(200).json({ data: user });
  } catch (err) {
    if (err.message === "User not found") {
      res.status(404).json({
        error: "User not found",
      });
    } else {
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }
};
exports.getUserById = getUserById;

//Controller responsavel por registrar uma novo user
const register = async (req, res) => {
  const data = req.body;
  try {
    const userId = await _userModelsjs.insertUser.call(void 0, data);
    return res.status(201).json({
      id: userId,
      message: "User registered successfully",
    });
  } catch (err) {
    if (err.message === "User already exists") {
      res.status(409).json({
        error: "User already exists",
      });
    } else {
      console.log(err);
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }
};
exports.register = register;

//Controller responsavel por atualizar um user a partir do id
const update = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    await _userModelsjs.updateUserById.call(void 0, id, data);
    res.status(200).json({ status: "ok" });
  } catch (err) {
    if (err.message === "User not found") {
      res.status(404).json({
        error: "User not found",
      });
    } else {
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }
};
exports.update = update;

//Controller responsavel por deletar um user a partir do id
const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    await _userModelsjs.deleteById.call(void 0, id);
    res.status(204).send();
  } catch (err) {
    if (err.message === "User not found") {
      res.status(404).json({
        error: "User not found",
      });
    } else {
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }
};
exports.deleteUserById = deleteUserById;
