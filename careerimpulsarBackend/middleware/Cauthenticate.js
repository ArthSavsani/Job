const express = require("express");
const app = express();
var cookieParser = require("cookie-parser");
app.use(cookieParser);
const jwt = require("jsonwebtoken");
const company_register = require("../model/CompanyRegister");
require('dotenv').config();
const Cauthenticate = async (req, res, next) => {
    try {
        var cobj = {
            cvalue: "",
        }
        const carr = req.headers.cookie.split(";");
        carr.forEach(element => {
            if (element.substr(0, 7) == "company") {
                cobj.cvalue = element.substr(8);
            }
        });
        const ctoken = cobj.cvalue;
        const verify_ctoken = jwt.verify(ctoken, process.env.C_SECRETKEY);
        const company_user = await company_register.findOne({ _id: verify_ctoken._id, "ctokens.ctoken": ctoken })
        //if (!worker_user) { throw new Error("Worker not found") };
        req.ctoken = ctoken;
        req.company_user = company_user;
        // console.log(req.company_user);
        req.companyId = company_user._id;
        next();
    } catch (error) {
        res.status(401).send("Unauthorised: unauthrized user access");
        console.log(error);
    }
};

module.exports = Cauthenticate;