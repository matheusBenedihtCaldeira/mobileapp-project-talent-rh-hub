import {
    getAllAssessments,
    insertAssessment,
    deleteAssessment,
    getAssessmentByProfileId,
    updateAssessment,
  } from "../../models/assessment/AssessmentModels.js";
  
  export const index = async (req, res) => {
      try {
        const assessments = await getAllAssessments();
        return res.json(assessments);
      } catch (err) {
        console.log(`ERROR: ${err.message}`);
        return res.status(500).json({
          error: "Internal Server Error",
        });
      }  
  };
  
  export const indexAssessmentByProfileId = async (req, res) => {
      try {
        const profileId = req.params.id;
        const assessments = await getAssessmentByProfileId(profileId);
        return res.json(assessments);
      } catch (err) {
        console.log(`ERROR: ${err.message}`);
        return res.status(500).json({
          error: "Internal Server Error",
        });
      }
  };
  
  export const registerAssessment = async (req, res) => {
      try {
        const assessment = req.body;
        await insertAssessment(assessment);
        return res.status(201).json(assessment);
      } catch (err) {
        console.log(`ERROR: ${err.message}`);
        return res.status(500).json({
          error: "Internal Server Error",
        });
      }
  };
  
  //Atualizar avaliaçoes
  export const update = async (req, res) => {
      try {
        const assessmentId = req.params.id;
        const assessment = req.body;
        await updateAssessment(assessmentId, assessment);
        return res.status(200).json(assessment);
      } catch (err) {
        console.log(`ERROR: ${err.message}`);
        return res.status(500).json({
          error: "Internal Server Error",
        });
      }
  };
  
  //Deletar avaliações
  export const deleteAssessments = async (req, res) => {
      try {
        const assessmentId = req.params.id;
        await deleteAssessment(assessmentId);
        return res.status(204).json();
      } catch (err) {
        console.log(`ERROR: ${err.message}`);
        return res.status(500).json({
          error: "Internal Server Error",
        });
      }
  };
  
  