import {
    indexApplicationsByVacancieId,
    registerApplication
} from '../../controllers/applications/ApplicationsControllers.js';
import express from "express";

const router = express.Router();

router.get("/:id", indexApplicationsByVacancieId);
router.post("/register", registerApplication);

export default router;
