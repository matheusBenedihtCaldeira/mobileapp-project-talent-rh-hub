"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }







var _DepartmentControllerjs = require('../../controllers/department/DepartmentController.js');
var _express = require('express'); var _express2 = _interopRequireDefault(_express);

const router = _express2.default.Router();

router.get("/", _DepartmentControllerjs.index);
router.get("/:id", _DepartmentControllerjs.getDepartmentById);
router.get('/profiles/:id', _DepartmentControllerjs.indexProfilesByUserIdControllers);
router.get('/profiles/department/:id', _DepartmentControllerjs.indexProfilesByDepartmentIdController);
router.post("/register", _DepartmentControllerjs.register);
router.patch("/update/:id", _DepartmentControllerjs.update);
router.delete("/delete/:id", _DepartmentControllerjs.deleteDepartment);

exports. default = router;
