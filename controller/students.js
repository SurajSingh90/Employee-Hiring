const Students = require('../model/students')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken') 
const config = require('../config/auth')

exports.Createstudents = async(req,res)=>{
    objectstudent={
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phone: req.body.phone,
        gmail: req.body.gmail,
        password: bcrypt.hashSync(req.body.password,8),
        role: req.body.role 
    }
    try{
        const result = await Students.create(objectstudent)
        res.send(result) 
    }catch(err){
        res.status(400).send({message:"internal error"})
        console.error(err) 
    } 
    

}

exports.loginpage = async (req,res)=>{
    try{
        const user = await Students.findOne({ firstname:req.params.firstname})
        if(user){
            const result = await Students.findOne({firstname:req.body.firstname})
            if(result){
                const passwordValid = bcrypt.compareSync(req.body.password, result.password)
                // res.send({message:"login success"})  
                if(!passwordValid){
                    res.status(403).send({message: "Password is not valid"})
                    return
                }
                const token = jwt.sign({firstname:result.firstname},config.secretkey,{
                    expiresIn:45000
                })
                res.status(200).send({
                    
                    accessToken: token
                })
            }
        }
        res.send({message:"firstname not found"})
            
        
    }catch(err){
        res.status(400).send({message:"internal error in login page"})
        console.error(err) 
    } 
}