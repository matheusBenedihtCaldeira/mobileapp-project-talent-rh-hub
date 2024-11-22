"use strict";Object.defineProperty(exports, "__esModule", {value: true});







var _DepartmentModelsjs = require('../../models/department/DepartmentModels.js');

 const index = async (req, res) => {
  try {
    const roles = await _DepartmentModelsjs.selectDepartments.call(void 0, );
    return res.json(roles);
  } catch (err) {
    console.log(`ERROR: ${err.message}`);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
}; exports.index = index;

 const getDepartmentById = async (req, res) => {
  try {
    const id = req.params.id;
    const department = await _DepartmentModelsjs.selectDepartmentById.call(void 0, id);
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
}; exports.getDepartmentById = getDepartmentById;

 const indexProfilesByUserIdControllers = async(req, res) => {
  try{
    const id = req.params.id;
    const profiles = await _DepartmentModelsjs.indexProfilesByUserId.call(void 0, id);
    return res.status(200).json({
      profiles: profiles
    })
  }catch(err){
    console.log(`ERROR: ${err}`)
    res.status(500).json({
      error: "Internal Server Error"
    })
  }
}; exports.indexProfilesByUserIdControllers = indexProfilesByUserIdControllers 

 const indexProfilesByDepartmentIdController = async(req, res) => {
  try{
    const id = req.params.id;
    const profiles = await _DepartmentModelsjs.selectProfilesByDepartmentId.call(void 0, id);
    return res.status(200).json({
      profiles: profiles
    })
  }catch(err){
    console.log(`ERROR: ${err}`)
    res.status(500).json({
      error: "Internal Server Error"
    })
  }
}; exports.indexProfilesByDepartmentIdController = indexProfilesByDepartmentIdController

 const register = async (req, res) => {
  const data = req.body;
  try {
    const departmentId = await _DepartmentModelsjs.insertDepartment.call(void 0, data);
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
}; exports.register = register;

 const update = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    await _DepartmentModelsjs.updatedDepartmentById.call(void 0, id, data);

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
}; exports.update = update;

 const deleteDepartment = async (req, res) => {
  try {
    const id = req.params.id;
    await _DepartmentModelsjs.deleteById.call(void 0, id);
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
}; exports.deleteDepartment = deleteDepartment;
