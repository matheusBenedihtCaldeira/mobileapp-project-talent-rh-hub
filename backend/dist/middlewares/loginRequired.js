"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);

_dotenv2.default.config();

exports. default = (req, res, next) => {
    const {authorization} = req.headers;

    if(!authorization) {
        return res.status(401).json({
            error: 'Login required'
        })
    }
    const [, token] = authorization.split(' ');

    try{
        const payload = _jsonwebtoken2.default.verify(token, process.env.TOKEN_SECRET)
        const {id, email} = payload
        req.userId = id
        req.userEmail = email
        return next()
    }catch(err){
        return res.status(401).json({
            error: 'Invalid token'
        })
    }
}