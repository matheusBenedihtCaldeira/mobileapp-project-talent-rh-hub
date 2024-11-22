"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }





var _AssessmentControllersjs = require('../../controllers/assessment/AssessmentControllers.js');
var _express = require('express'); var _express2 = _interopRequireDefault(_express);

const router = _express2.default.Router();

router.get("/", _AssessmentControllersjs.index);
router.post("/register", _AssessmentControllersjs.registerAssessment);
router.delete("/delete/:id", _AssessmentControllersjs.deleteAssessments);
router.get("/profile/:id", _AssessmentControllersjs.indexAssessmentByProfileId);
router.patch("/update/:id", _AssessmentControllersjs.update);

exports. default = router;

