import {
    registerAssessment,
    deleteAssessments,
    indexAssessmentByProfileId,
    update,
    index
} from '../../controllers/assessment/AssessmentControllers.js';
import express from "express";

const router = express.Router();

router.get("/", index);
router.post("/register", registerAssessment);
router.delete("/delete/:id", deleteAssessments);
router.get("/profile/:id", indexAssessmentByProfileId);
router.patch("/update/:id", update);

export default router;

