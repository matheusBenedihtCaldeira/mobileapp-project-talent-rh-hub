import {
  register,
  index,
  getDepartmentById,
  update,
  deleteDepartment,
} from "../../controllers/department/DepartmentController.js";
import express from "express";

const router = express.Router();

router.get("/", index);
router.get("/:id", getDepartmentById);
router.post("/register", register);
router.patch("/update/:id", update);
router.delete("/delete/:id", deleteDepartment);

export default router;
