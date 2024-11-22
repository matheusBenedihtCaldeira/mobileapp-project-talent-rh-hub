"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var _ProfileModelsjs = require("../../models/profile/ProfileModels.js");
var _userModelsjs = require("../../models/user/UserModels.js");

const index = async (req, res) => {
  try {
    const profiles = await _ProfileModelsjs.selectProfiles.call(void 0);
    res.json(profiles);
  } catch (err) {
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};
exports.index = index;

const getProfileById = async (req, res) => {
  try {
    const id = req.params.id;
    const profile = await _ProfileModelsjs.selectProfileById.call(void 0, id);
    return res.status(200).json({
      data: profile,
    });
  } catch (err) {
    if (err.message === "Profile not found") {
      res.status(404).json({
        error: "Profile not found",
      });
    } else {
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }
};
exports.getProfileById = getProfileById;

//Controller responsavel por registrar uma novo user
const register = async (req, res) => {
  const data = req.body;
  try {
    const userId = await _userModelsjs.insertUser.call(void 0, data);
    const profileId = await _ProfileModelsjs.insertProfile.call(
      void 0,
      data,
      userId
    );
    return res.status(201).json({
      id: profileId,
      message: "Profile registered successfully",
    });
  } catch (err) {
    if (err.message === "Profile already exists") {
      res.status(409).json({
        error: "Profile already exists",
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

//Controller responsavel por atualizar um profile
const update = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    await _ProfileModelsjs.updateProfileById.call(void 0, id, data);
    return res.status(200).json({ status: "ok" });
  } catch (err) {
    if (err.message === "Profile not found") {
      res.status(404).json({
        error: "Profile not found",
      });
    } else {
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }
};
exports.update = update;

//Controller responsavel por deletar um profile a partir do id
const deleteProfileById = async (req, res) => {
  try {
    const id = req.params.id;
    await _ProfileModelsjs.deleteById.call(void 0, id);
    return res.status(204).send();
  } catch (err) {
    if (err.message === "Profile not found") {
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
exports.deleteProfileById = deleteProfileById;
