"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var _express = require("express");
var _express2 = _interopRequireDefault(_express);
var _userControllerjs = require("../../controllers/user/UserController.js");
var _loginRequiredjs = require("../../middlewares/loginRequired.js");
var _loginRequiredjs2 = _interopRequireDefault(_loginRequiredjs);

const router = _express2.default.Router();

router.get("/", _userControllerjs.index);

router.get("/:id", _userControllerjs.getUserById);

router.post("/register", _userControllerjs.register);

router.patch("/update/:id", _userControllerjs.update);

router.delete("/delete/:id", _userControllerjs.deleteUserById);

exports.default = router;
