import {
  deleteById,
  getAllRoles,
  registerRole,
  roleById,
  updateRoleById,
} from "../../models/roles/RoleModels.js";

//Controller responsavel por listar todas as roles da base de dados
export const index = async (req, res) => {
  try {
    const roles = await getAllRoles();
    res.json(roles);
  } catch (err) {
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

//Controller responsavel por recuperar uma role a partir do ID
export const getRoleById = async (req, res) => {
  try {
    const id = req.params.id;
    const role = await roleById(id);
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

//Controller responsavel por registrar uma nova role
export const register = async (req, res) => {
  const { role } = req.body;
  try {
    const roleId = await registerRole(role);
    console.log(roleId);
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

//Controller responsavel por atualizar uma role a partir do id
export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const role = req.body.role;

    await updateRoleById(id, role);

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

//Controller responsavel por deletar uma role a partir do id
export const deleteRoleById = async (req, res) => {
  try {
    const id = req.params.id;
    await deleteById(id);
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
