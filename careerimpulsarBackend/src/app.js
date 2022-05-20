const express = require("express");
const app = express();
require("../db/conn");
require("../model/WorkerRegister");
require("../model/CompanyRegister");
require("../model/CompanyPostJob");
require("../model/CompanyPostInternship");
require("../model/CompanyPostFreelance");
app.use(express.json());
app.use(require('../router/auth.js'));
app.listen(8000, () => {
    console.log(`Listening to the port no 8000`);
})
