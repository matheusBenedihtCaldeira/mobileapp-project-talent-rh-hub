import { deleteById,index,create, update,getById } from "../../controllers/vacancies/VacanciesControllers.js";

import express from "express"; 

const router = express.Router();

router.get("/", index);
router.get("/:id", getById);
router.post("/register", create);//passa a info pelo form
router.patch("/update/:id", update); //info existe e quer trocar todas as informações
router.delete("/delete/:id", deleteById); //info existe e quer deletar

export default router;