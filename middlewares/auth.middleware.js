const jwt = require('jsonwebtoken')
require('dotenv').config();

const userAuth = (req,res,next)=>{
    const {token} = req.cookies;

    const decode = jwt.verify(token,process.env.SECRET_KEY);
    req.user = decode;
    next();
}

module.exports = userAuth;
