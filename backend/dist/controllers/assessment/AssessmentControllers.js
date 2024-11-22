"use strict";Object.defineProperty(exports, "__esModule", {value: true});





var _AssessmentModelsjs = require('../../models/assessment/AssessmentModels.js');
  
   const index = async (req, res) => {
      try {
        const assessments = await _AssessmentModelsjs.getAllAssessments.call(void 0, );
        return res.json(assessments);
      } catch (err) {
        console.log(`ERROR: ${err.message}`);
        return res.status(500).json({
          error: "Internal Server Error",
        });
      }  
  }; exports.index = index;
  
   const indexAssessmentByProfileId = async (req, res) => {
      try {
        const profileId = req.params.id;
        const assessments = await _AssessmentModelsjs.getAssessmentByProfileId.call(void 0, profileId);
        return res.json(assessments);
      } catch (err) {
        console.log(`ERROR: ${err.message}`);
        return res.status(500).json({
          error: "Internal Server Error",
        });
      }
  }; exports.indexAssessmentByProfileId = indexAssessmentByProfileId;
  
   const registerAssessment = async (req, res) => {
      try {
        const assessment = req.body;
        await _AssessmentModelsjs.insertAssessment.call(void 0, assessment);
        return res.status(201).json(assessment);
      } catch (err) {
        console.log(`ERROR: ${err.message}`);
        return res.status(500).json({
          error: "Internal Server Error",
        });
      }
  }; exports.registerAssessment = registerAssessment;
  
  //Atualizar avaliaçoes
   const update = async (req, res) => {
      try {
        const assessmentId = req.params.id;
        const assessment = req.body;
        await _AssessmentModelsjs.updateAssessment.call(void 0, assessmentId, assessment);
        return res.json(assessment);
      } catch (err) {
        console.log(`ERROR: ${err.message}`);
        return res.status(500).json({
          error: "Internal Server Error",
        });
      }
  }; exports.update = update;
  
  //Deletar avaliações
   const deleteAssessments = async (req, res) => {
      try {
        const assessmentId = req.params.id;
        await _AssessmentModelsjs.deleteAssessment.call(void 0, assessmentId);
        return res.status(204).json();
      } catch (err) {
        console.log(`ERROR: ${err.message}`);
        return res.status(500).json({
          error: "Internal Server Error",
        });
      }
  }; exports.deleteAssessments = deleteAssessments;
  
  