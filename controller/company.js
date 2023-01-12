const company = require("../model/company");
const Student = require("../model/students");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/auth");

exports.CreateCompany = async (req, res) => {
  objectCompany = {
    companyPhone: req.body.companyPhone,
    companyName: req.body.companyName,
    companyEmail: req.body.companyEmail,
    password: bcrypt.hashSync(req.body.password, 8),
    role: req.body.role,
  };
  try {
    const result = await company.create(objectCompany);
    res.send(result);
  } catch (err) {
    res.status(400).send({ message: "internal error" });
    console.error(err);
  }
};
exports.logincompany = async (req, res) => {
  try {
    const result = await company.findOne({ companyName: req.body.companyName });
    if (result) {
      const passwordValid = bcrypt.compareSync(
        req.body.password,
        result.password
      );
      // res.send({message:"login success"})
      if (!passwordValid) {
        res.status(403).send({ message: "Password is not valid" });
        return;
      }
      const token = jwt.sign(
        { companyName: result.companyName },
        config.secretkey,
        {
          expiresIn: 45000,
        }
      );
      res.status(200).send({
        accessToken: token,
      });
    }

    res.send({ message: "firstname not found" });
  } catch (err) {
    res.status(400).send({ message: "internal error in login page" });
    console.error(err);
  }
};

exports.getalljobs = async (req, res) => {
  const idresult = await Student.findById({ _id: req.params.id });
  if (!idresult) {
    res.send({ message: "id not found" });
  }
  try {
    const result = await company.find();
    res.send(result);
  } catch (err) {
    res.status(400).send({ message: "internal error" });
    console.error(err);
  }
};

exports.deletebyadmin = async (req, res) => {
  const id = req.params.id;
  try {
    await company.deleteOne({ _id: id });
    res.send({ message: "Delete successfully" });
  } catch (err) {
    res.status(400).send({ message: "internal error" });
    console.error(err);
  }
};
