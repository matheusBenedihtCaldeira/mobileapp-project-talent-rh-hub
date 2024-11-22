"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);

var _roleRoutesjs = require('./routes/roleRoutes/roleRoutes.js'); var _roleRoutesjs2 = _interopRequireDefault(_roleRoutesjs);
var _UserRoutesjs = require('./routes/userRoutes/UserRoutes.js'); var _UserRoutesjs2 = _interopRequireDefault(_UserRoutesjs);
var _tokenRoutesjs = require('./routes/tokenRoutes/tokenRoutes.js'); var _tokenRoutesjs2 = _interopRequireDefault(_tokenRoutesjs);
var _ProfileRoutesjs = require('./routes/profileRoutes/ProfileRoutes.js'); var _ProfileRoutesjs2 = _interopRequireDefault(_ProfileRoutesjs);
var _DepartmentRoutesjs = require('./routes/department/DepartmentRoutes.js'); var _DepartmentRoutesjs2 = _interopRequireDefault(_DepartmentRoutesjs);
var _AssessmentRoutesjs = require('./routes/assessment/AssessmentRoutes.js'); var _AssessmentRoutesjs2 = _interopRequireDefault(_AssessmentRoutesjs);
var _VacanciesRoutesjs = require('.//routes/vacanciesRoutes/VacanciesRoutes.js'); var _VacanciesRoutesjs2 = _interopRequireDefault(_VacanciesRoutesjs);
var _ApplicationsRoutesjs = require('./routes/applications/ApplicationsRoutes.js'); var _ApplicationsRoutesjs2 = _interopRequireDefault(_ApplicationsRoutesjs);

const app = _express2.default.call(void 0, );

app.use(_cors2.default.call(void 0, {
    origin: 'http://localhost:8081', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(_express2.default.json());

//Role routes
app.use("/api/roles", _roleRoutesjs2.default);

//User routes
app.use("/api/users", _UserRoutesjs2.default);
app.use("/api/token", _tokenRoutesjs2.default);
app.use("/api/profile", _ProfileRoutesjs2.default);
app.use("/api/department", _DepartmentRoutesjs2.default);
app.use("/api/assessment", _AssessmentRoutesjs2.default);
app.use("/api/vacancies", _VacanciesRoutesjs2.default);
app.use("/api/applications", _ApplicationsRoutesjs2.default)

exports. default = app;
