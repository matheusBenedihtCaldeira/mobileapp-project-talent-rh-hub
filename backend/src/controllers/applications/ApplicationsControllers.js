import app from "../../app.js";
import {
    getAllApllicationsByVacancieId,
    insertApplication
} from "../../models/applications/ApplicationsModel.js";
  
    export const indexApplicationsByVacancieId = async (req, res) => {
      try {
        const vacancieId = req.params.id;
        const applications = await getAllApllicationsByVacancieId(vacancieId);
        return res.json(applications);
      } catch (err) {
        console.log(`ERROR: ${err.message}`);
        return res.status(500).json({
          error: "Internal Server Error",
        });
      }
  };
  
  export const registerApplication = async (req, res) => {
      try {
        const application = req.body;
        console.log(application)
        await insertApplication(application);
        return res.status(201).json(application);
      } catch (err) {
        console.log(`ERROR: ${err.message}`);
        return res.status(500).json({
          error: "Internal Server Error",
        });
      }
  };
  