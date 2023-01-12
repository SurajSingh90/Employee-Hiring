const Job = require('../model/job');

exports.Createjob = async(req,res) =>{
    const objectjob={
        companyId:req.body. companyId,
        title:req.body. title,
        description:req.body.description,
        applicants:req.body.applicants,

    }
    const result = await Job.create(objectjob);
    res.send(result);
}