"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _VacanciesControllersjs = require('../../controllers/vacancies/VacanciesControllers.js');

var _express = require('express'); var _express2 = _interopRequireDefault(_express); 

const router = _express2.default.Router();

router.get("/", _VacanciesControllersjs.index);
router.get("/:id", _VacanciesControllersjs.getById);
router.post("/register", _VacanciesControllersjs.create);//passa a info pelo form
router.patch("/update/:id", _VacanciesControllersjs.update); //info existe e quer trocar todas as informações
router.delete("/delete/:id", _VacanciesControllersjs.deleteById); //info existe e quer deletar

exports. default = router;