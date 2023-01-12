const Admins = require('../model/admin');

exports.CreateAdmin = async(req,res) =>{
    const objectadmin={
        names:req.body.names,
        email:req.body.email,
        role:req.body.role,

    }
    const result = await Admins.create(objectadmin);
    res.send(result);
}