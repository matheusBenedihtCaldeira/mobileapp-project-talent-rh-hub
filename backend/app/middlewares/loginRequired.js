import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';

dotenv.config();

export default (req, res, next) => {
    const {authorization} = req.headers;

    if(!authorization) {
        return res.status(401).json({
            error: 'Login required'
        })
    }
    const [, token] = authorization.split(' ');

    try{
        const payload = jwt.verify(token, process.env.TOKEN_SECRET)
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