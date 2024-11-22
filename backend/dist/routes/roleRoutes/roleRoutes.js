"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);






var _roleControllersjs = require('../../controllers/role/roleControllers.js');

const router = _express2.default.Router();

router.get("/", _roleControllersjs.index);
router.get("/:id", _roleControllersjs.getRoleById);
router.post("/register", _roleControllersjs.register);
router.patch("/update/:id", _roleControllersjs.update);
router.delete("/delete/:id", _roleControllersjs.deleteRoleById);

exports. default = router;
