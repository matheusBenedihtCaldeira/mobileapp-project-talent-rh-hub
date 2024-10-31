import {
  selectProfileById,
  selectProfiles,
  updateProfileById,
  deleteById,
} from "../../models/profile/ProfileModels.js";

export const index = async (req, res) => {
  try {
    const profiles = await selectProfiles();
    res.json(profiles);
  } catch (err) {
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

export const getProfileById = async (req, res) => {
  try {
    const id = req.params.id;
    const profile = await selectProfileById(id);
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

//Controller responsavel por atualizar um profile
export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    await updateProfileById(id, data);
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

//Controller responsavel por deletar um profile a partir do id
export const deleteProfileById = async (req, res) => {
  try {
    const id = req.params.id;
    await deleteById(id);
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
