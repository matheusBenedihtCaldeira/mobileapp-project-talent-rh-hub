import {
  register,
  index,
  indexProfilesByUserIdControllers,
  getDepartmentById,
  indexProfilesByDepartmentIdController,
  update,
  deleteDepartment,
} from "../../controllers/department/DepartmentController.js";
import express from "express";

const router = express.Router();

router.get("/", index);
router.get("/:id", getDepartmentById);
router.get('/profiles/:id', indexProfilesByUserIdControllers);
router.get('/profiles/department/:id', indexProfilesByDepartmentIdController);
router.post("/register", register);
router.patch("/update/:id", update);
router.delete("/delete/:id", deleteDepartment);

export default router;
