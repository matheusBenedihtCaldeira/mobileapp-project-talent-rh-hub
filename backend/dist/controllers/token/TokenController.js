"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var _userModelsjs = require("../../models/user/UserModels.js");
var _bcrypt = require("bcrypt");
var _bcrypt2 = _interopRequireDefault(_bcrypt);
var _jsonwebtoken = require("jsonwebtoken");
var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _dotenv = require("dotenv");
var _dotenv2 = _interopRequireDefault(_dotenv);

_dotenv2.default.config();

const store = async (req, res) => {
  try {
    const data = req.body;

    if (!data.email || !data.password) {
      return res.status(400).json({
        error: "Email and password are required",
      });
    }

    const user = await _userModelsjs.getUserByEmail.call(void 0, data.email);
    if (!(await passwordIsValid(data.password, user.password))) {
      return res.status(400).json({
        error: "Invalid email or password",
      });
    }
    const token = _jsonwebtoken2.default.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role_name,
      },
      process.env.TOKEN_SECRET
    );
    res.json({
      token: token,
    });
  } catch (err) {
    console.log(err);
    if (err.message === "User not found") {
      return res.status(404).json({
        error: "User not found",
      });
    }
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};
exports.store = store;

const passwordIsValid = async (passwordRequest, passwordHash) => {
  return await _bcrypt2.default.compare(passwordRequest, passwordHash);
};
