"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }


var _ApplicationsControllersjs = require('../../controllers/applications/ApplicationsControllers.js');
var _express = require('express'); var _express2 = _interopRequireDefault(_express);

const router = _express2.default.Router();

router.get("/:id", _ApplicationsControllersjs.indexApplicationsByVacancieId);
router.post("/register", _ApplicationsControllersjs.registerApplication);

exports. default = router;
