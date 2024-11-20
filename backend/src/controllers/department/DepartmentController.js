import {
  selectDepartments,
  selectDepartmentById,
  insertDepartment,
  selectProfilesByDepartmentId,
  indexProfilesByUserId,
  deleteById,
  updatedDepartmentById,
} from "../../models/department/DepartmentModels.js";

export const index = async (req, res) => {
  try {
    const roles = await selectDepartments();
    return res.json(roles);
  } catch (err) {
    console.log(`ERROR: ${err.message}`);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

export const getDepartmentById = async (req, res) => {
  try {
    const id = req.params.id;
    const department = await selectDepartmentById(id);
    return res.status(200).json({
      department: department,
    });
  } catch (err) {
    if (err.message === "Department not found") {
      return res.status(404).json({
        error: "Department not found",
      });
    } else {
      console.log(`ERROR: ${err.message}`);
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }
};

export const indexProfilesByUserIdControllers = async(req, res) => {
  try{
    const id = req.params.id;
    const profiles = await indexProfilesByUserId(id);
    return res.status(200).json({
      profiles: profiles
    })
  }catch(err){
    console.log(`ERROR: ${err}`)
    res.status(500).json({
      error: "Internal Server Error"
    })
  }
} 

export const indexProfilesByDepartmentIdController = async(req, res) => {
  try{
    const id = req.params.id;
    const profiles = await selectProfilesByDepartmentId(id);
    return res.status(200).json({
      profiles: profiles
    })
  }catch(err){
    console.log(`ERROR: ${err}`)
    res.status(500).json({
      error: "Internal Server Error"
    })
  }
}

export const register = async (req, res) => {
  const data = req.body;
  try {
    const departmentId = await insertDepartment(data);
    return res.status(201).json({
      id: departmentId,
      message: "Department registered successfully",
    });
  } catch (err) {
    if (err.message === "Department already exists") {
      return res.status(409).json({
        error: "Role already exists",
      });
    } else {
      console.log(`ERROR: ${err.message}`);
      return res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }
};

export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    await updatedDepartmentById(id, data);

    return res.status(200).json({ status: "ok" });
  } catch (err) {
    if (err.message === "Role not found") {
      return res.status(404).json({
        error: "Role not found",
      });
    } else {
      console.log(`ERROR: ${err.message}`);
      return res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }
};

export const deleteDepartment = async (req, res) => {
  try {
    const id = req.params.id;
    await deleteById(id);
    return res.status(204).send();
  } catch (err) {
    if (err.message === "Department not found") {
      return res.status(404).json({
        error: "Department not found",
      });
    } else {
      console.log(`ERROR: ${err.message}`);
      return res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }
};
