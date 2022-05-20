const express = require("express");
const app = express();
var cookieParser = require("cookie-parser");
app.use(cookieParser);
const jw = require("jsonwebtoken");
const worker_register = require("../model/WorkerRegister");
require('dotenv').config();
const Authenticate = async (req, res, next) => {
    try {
        var obj = {
            value: "",
        }
        const arr = req.headers.cookie.split(";");
        //console.log(arr);
        arr.forEach(element => {
            if (element.substr(0, 6) == "worker") {
                obj.value = element.substr(7);
            }
        });
        const token = obj.value;
        console.log(token);
        const verify_token = jw.verify(token, process.env.SECRETKEY);
        const worker_user = await worker_register.findOne({ _id: verify_token._id, "tokens.token": token })
        //if (!worker_user) { throw new Error("Worker not found") };
        //console.log(worker_user);
        req.token = token;
        req.worker_user = worker_user;
        req.WorkerId = worker_user._id;
        next();
    } catch (error) {
        res.status(401).send("Unauthorised: unauthrized user access");
        console.log(error);
    }
};

module.exports = Authenticate;