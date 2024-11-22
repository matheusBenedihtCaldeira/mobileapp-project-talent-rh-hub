"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var _roleModelsjs = require("../../models/roles/RoleModels.js");

//Controller responsavel por listar todas as roles da base de dados
const index = async (req, res) => {
  try {
    const roles = await _roleModelsjs.getAllRoles.call(void 0);
    res.json(roles);
  } catch (err) {
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};
exports.index = index;

//Controller responsavel por recuperar uma role a partir do ID
const getRoleById = async (req, res) => {
  try {
    const id = req.params.id;
    const role = await _roleModelsjs.roleById.call(void 0, id);
    res.status(200).json({ role: role });
  } catch (err) {
    if (err.message === "Role not found") {
      res.status(404).json({
        error: "Role not found",
      });
    } else {
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }
};
exports.getRoleById = getRoleById;

//Controller responsavel por registrar uma nova role
const register = async (req, res) => {
  const { role } = req.body;
  try {
    const roleId = await _roleModelsjs.registerRole.call(void 0, role);
    res.status(201).json({
      id: roleId,
      message: "Role registered successfully",
    });
  } catch (err) {
    if (err.message === "Role already exists") {
      res.status(409).json({
        error: "Role already exists",
      });
    } else {
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }
};
exports.register = register;

//Controller responsavel por atualizar uma role a partir do id
const update = async (req, res) => {
  try {
    const id = req.params.id;
    const role = req.body.role;

    await _roleModelsjs.updateRoleById.call(void 0, id, role);

    res.status(200).json({ status: "ok" });
  } catch (err) {
    if (err.message === "Role not found") {
      res.status(404).json({
        error: "Role not found",
      });
    } else {
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }
};
exports.update = update;

//Controller responsavel por deletar uma role a partir do id
const deleteRoleById = async (req, res) => {
  try {
    const id = req.params.id;
    await _roleModelsjs.deleteById.call(void 0, id);
    res.status(204).send();
  } catch (err) {
    if (err.message === "Role not found") {
      res.status(404).json({
        error: "Role not found",
      });
    } else {
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }
};
exports.deleteRoleById = deleteRoleById;
