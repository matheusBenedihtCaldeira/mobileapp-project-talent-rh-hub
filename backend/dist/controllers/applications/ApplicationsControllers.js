"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _appjs = require('../../app.js'); var _appjs2 = _interopRequireDefault(_appjs);



var _ApplicationsModeljs = require('../../models/applications/ApplicationsModel.js');
  
     const indexApplicationsByVacancieId = async (req, res) => {
      try {
        const vacancieId = req.params.id;
        const applications = await _ApplicationsModeljs.getAllApllicationsByVacancieId.call(void 0, vacancieId);
        return res.json(applications);
      } catch (err) {
        console.log(`ERROR: ${err.message}`);
        return res.status(500).json({
          error: "Internal Server Error",
        });
      }
  }; exports.indexApplicationsByVacancieId = indexApplicationsByVacancieId;
  
   const registerApplication = async (req, res) => {
      try {
        const application = req.body;
        console.log(application)
        await _ApplicationsModeljs.insertApplication.call(void 0, application);
        return res.status(201).json(application);
      } catch (err) {
        console.log(`ERROR: ${err.message}`);
        return res.status(500).json({
          error: "Internal Server Error",
        });
      }
  }; exports.registerApplication = registerApplication;
  