const jwtHelper = require("../../Helpers/jwt_helper");
require('dotenv').config();

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

var isAuth = async ( req, res, next) =>{
    const tokenFromClient =  req.headers["authorization"]; // nho la viet thuong chu dau
    // console.log(tokenFromClient);
    // console.log(req.headers)
    if(tokenFromClient){
        try{
            const decode = await jwtHelper.verifyToken(tokenFromClient, accessTokenSecret);
            req.jwtdecode = decode;
            next();
        }catch(err){
            return res.status(401).json({
                message :"Unauthorized."
            })

        }
    }else{
        return res.status(403).send({
            message :"No token provided."
        })
    }
}
module.exports ={
    isAuth
}