import express from "express";
import { indexUsers } from "../controllers/users/userController.js";
const userRoutes = express.Router();

 userRoutes.get("/", indexUsers);

 export default userRoutes;