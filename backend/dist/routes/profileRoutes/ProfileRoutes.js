"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);






var _ProfileControllersjs = require('../../controllers/profile/ProfileControllers.js');

var _loginRequiredjs = require('../../middlewares/loginRequired.js'); var _loginRequiredjs2 = _interopRequireDefault(_loginRequiredjs);

const router = _express2.default.Router();

router.get("/", _ProfileControllersjs.index);
router.get("/:id", _ProfileControllersjs.getProfileById);
router.post("/register", _ProfileControllersjs.register);
router.patch("/update/:id", _ProfileControllersjs.update);
router.delete("/delete/:id", _ProfileControllersjs.deleteProfileById);

exports. default = router;
