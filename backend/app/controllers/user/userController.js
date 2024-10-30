import {
  selectUsers,
  selectUserById,
  insertUser,
  updateUserById,
  deleteById
} from "../../models/user/userModels.js";

//Controller responsavel por listar todas os users da base de dados
export const index = async (req, res) => {
  try {
    const users = await selectUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

//Controller responsavel por recuperar um user a partir do ID
export const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await selectUserById(id);
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

//Controller responsavel por registrar uma novo user
export const register = async (req, res) => {
  const data = req.body;
  try {
    const userId = await insertUser(data);
    res.status(201).json({
      id: userId,
      message: "User registered successfully",
    });
  } catch (err) {
    if (err.message === "User already exists") {
      res.status(409).json({
        error: "User already exists",
      });
    } else {
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }
};

//Controller responsavel por atualizar um user a partir do id
export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    await updateUserById(id, data);
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

//Controller responsavel por deletar um user a partir do id
export const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    await deleteById(id);
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
