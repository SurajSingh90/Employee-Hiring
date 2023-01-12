const jwt = require('jsonwebtoken');
const config = require('../config/auth')

exports.verify = async(req, res, next) =>{
    const token = req.headers['x-oauth-token'];
    if(!token){
        res.status(401).send({
            message: "No token provided!"
        })
    } 
    jwt.verify(token, config.secretkey,(err)=>{
        if (err) {
            return res.status(401).send({ message: "Unauthorized!"});
         }
         next()
    })
}

exports.Isadmin = async(req,res, next)=>{
    if(req.students && req.students.role === "admin"){
        next();
    }else {
        res.status(403).send("Forbidden");
      }
}