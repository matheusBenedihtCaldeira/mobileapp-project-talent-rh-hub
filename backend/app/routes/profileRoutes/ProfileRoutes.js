import express from "express";
import {
  index,
  getProfileById,
  update,
  deleteProfileById,
} from "../../controllers/profile/ProfileControllers.js";

import loginRequired from "../../middlewares/loginRequired.js";

const router = express.Router();

router.get("/", index);
router.get("/:id", getProfileById);
router.patch("/update/:id", update);
router.delete("/delete/:id", deleteProfileById);

export default router;
