const express = require("express");
const app = express();
require("cookie-parser");
const router = express.Router();
var validator = require("email-validator");
const bcryptjs = require('bcryptjs');
const jwttoken = require("jsonwebtoken");
//require("../db/conn");
const Authenticate = require("../middleware/authenticate");
const Cauthenticate = require("../middleware/Cauthenticate");
var workerRegistration = require("../model/WorkerRegister");
const companyRegistration = require("../model/CompanyRegister");
const companyPostJob = require("../model/CompanyPostJob");
const companyPostInternship = require("../model/CompanyPostInternship");
const companyPostFreelance = require("../model/CompanyPostFreelance");
router.get('/', (req, res) => {
    res.send("Welcome to careerimpulsar backend");
})

router.get('/workerSignup', (req, res) => {
    res.send("backend");
})
router.get('/login', (req, res) => {
    res.send("backend login");
})
router.post('/workerSignup', async (req, res) => {
    const { firstName, lastName, email, password, confirm_password } = req.body;

    try {
        const userExist = await workerRegistration.findOne({ email: email })
        if (userExist) {
            return res.status(409).json({ error: "Email already exist" });
        }
        else if (!validator.validate(email)) {
            return res.status(422).json({ error: "Invalid email formate" });
        }
        else {
            var pass = await bcryptjs.hash(password, 12);
            const worker_register = new workerRegistration({ firstName, lastName, email, password: pass });
            worker_register.save().then(() => {
                res.status(201).json({ message: "Successful Registration" });
            }).catch((err) => {
                res.status(500).json({ error: "Registration Failed" });
                console.log(err);
            })
        }
    } catch (e) {
        console.log(e);
    }
})
router.post('/login', async (req, res) => {
    const { email, pass, login_choice_button } = req.body;
    if (!email || !pass || !login_choice_button) {
        return res.status(400).json({ error: "Please Provide All The Fields" });
    }
    if (login_choice_button === 'worker') {
        try {
            const worker_data = await workerRegistration.findOne({ email: email });
            if (worker_data) {
                const isMatch = await bcryptjs.compare(pass, worker_data.password);
                if (!isMatch) {
                    return res.status(422).json({ error: "Please Provide Valid Login Credentials" });
                }
                const token = await worker_data.generateAuthToken();

                // STORE THE TOKEN TO  THE COOKIE FOR MAINTAINING SESSION
                res.cookie("worker", token, {
                    //EXPIRES AFTER 30 DAYS DATE IN MILISECOND 25892000000 IN MILISECOND
                    expires: new Date(Date.now() + 25892000000),
                    httpOnly: true
                })
                return res.status(200).json({ message: "Worker" });
            } else {
                return res.status(422).json({ error: "Please Provide Valid Login Credentials" });
            }
        } catch (error) {
            console.log(error);
            //return res.status(500).json({ error: "Login Failed" });
        }
    }
    else if (login_choice_button === 'company') {
        try {
            const company_data = await companyRegistration.findOne({ workEmail: email });
            if (company_data) {
                const isMatch = await bcryptjs.compare(pass, company_data.password);
                if (!isMatch) {
                    return res.status(422).json({ error: "Please Provide Valid Login Credentials" });
                }
                const ctoken = await company_data.generateAuthToken();

                // STORE THE TOKEN TO  THE COOKIE FOR MAINTAINING SESSION
                res.cookie("company", ctoken, {
                    //EXPIRES AFTER 30 DAYS DATE IN MILISECOND 25892000000 IN MILISECOND
                    expires: new Date(Date.now() + 25892000000),
                    httpOnly: true
                })
                return res.status(200).json({ message: "Company" });
            } else {
                return res.status(422).json({ error: "Please Provide Valid Login Credentials" });
            }
        } catch (error) {
            console.log(error);
            //return res.status(500).json({ error: "Login Failed" });
        }
    }
});
router.post('/companysignup', async (req, res) => {
    const { companyName, workEmail, password, confirm_password } = req.body;
    if (!companyName || !workEmail || !password || !confirm_password) {
        return res.status(400).json({ error: "Please Provide All The Fields" });
    }
    try {
        const companyExist = await companyRegistration.findOne({ workEmail: workEmail })
        if (companyExist) {
            return res.status(409).json({ error: "Email already exist" });
        }
        else if (!validator.validate(workEmail)) {
            return res.status(422).json({ error: "Invalid email formate" });
        }
        else {
            var pass = await bcryptjs.hash(password, 12);
            const company_register = new companyRegistration({ companyName, workEmail, password: pass });
            company_register.save().then(() => {
                res.status(201).json({ message: "Successful Registration" });
            }).catch((err) => {
                res.status(500).json({ error: "Registration Failed" });
                console.log(err);
            })
        }
    } catch (e) {
        console.log(e);
    }
});

router.post('/workerProfile', Authenticate, (req, res) => {
    res.send(req.worker_user);
});

router.post('/workerDashboard', Authenticate, (req, res) => {
    res.send(req.worker_user);
});

router.post('/companyDashboard', Cauthenticate, (req, res) => {
    res.send(req.company_user);
});

router.post('/companyDashboard/CompanyPostJob', Cauthenticate, (req, res) => {
    try {
        const { jobtitle, experiance, location, jobtype,
            position, aboutcompany, qualifications, course, salary,
            mskills, oskills, time } = req.body;
        if (!jobtitle || !experiance || !location || !jobtype ||
            !position || !aboutcompany || !qualifications || !course ||
            !salary || !mskills || !oskills || !time) {
            return res.status(400).json({ error: "Please Provide All The Fields" });
        }
        else {
            const postedBy = req.companyId;
            const companyName = req.company_user.companyName;
            const company_PostJob = new companyPostJob({
                jobtitle, experiance, location, jobtype,
                position, aboutcompany, qualifications, course, salary,
                mskills, oskills, time, postedBy, companyName
            });
            company_PostJob.save().then(() => {
                res.status(201).json({ message: "Successful Registration" });
            }).catch((err) => {
                res.status(500).json({ error: "Registration Failed" });
                console.log(err);
            })
        }
    } catch (error) {
        console.log(error);
    }
})

router.post('/companyDashboard/CompanyPostInternship', Cauthenticate, (req, res) => {
    try {
        console.log(req.body);
        const { Title, type, location, internwork,
            aboutcompany, qualifications, course, stipend,
            mskills, oskills, sdate, duration, openings } = req.body;
        if (!Title || !type || !location || !internwork ||
            !aboutcompany || !qualifications || !course ||
            !stipend || !mskills || !oskills || !sdate || !duration || !openings) {
            return res.status(400).json({ error: "Please Provide All The Fields" });
        }
        else {
            const postedBy = req.companyId;
            const companyName = req.company_user.companyName;
            const postedOn = new Date().toISOString().slice(0, 10);
            const company_PostInternship = new companyPostInternship({
                Title, type, location, internwork,
                aboutcompany, qualifications, course, stipend,
                mskills, oskills, sdate, duration, openings,
                postedBy, companyName, postedOn
            });
            company_PostInternship.save().then(() => {
                res.status(201).json({ message: "Successful Registration" });
            }).catch((err) => {
                res.status(500).json({ error: "Registration Failed" });
                console.log(err);
            })
        }
    } catch (error) {
        console.log(error);
    }
})
router.post('/companyDashboard/companyPostFreelance', Cauthenticate, (req, res) => {
    try {
        const { ttitle, tdescription, wduration, omoney } = req.body;
        if (!ttitle || !tdescription || !wduration || !omoney) {
            return res.status(400).json({ error: "Please Provide All The Fields" });
        }
        else {
            const postedBy = req.companyId;
            const companyName = req.company_user.companyName;
            const company_PostFreelance = new companyPostFreelance({
                ttitle, tdescription, wduration, omoney, postedBy, companyName
            });
            company_PostFreelance.save().then(() => {
                res.status(201).json({ message: "Successful Registration" });
            }).catch((err) => {
                res.status(500).json({ error: "Registration Failed" });
                console.log(err);
            })
        }
    } catch (error) {
        console.log(error);
    }
})
router.get('/workerDashboard/getJobsPosting', async (req, res) => {
    try {
        const job_info = await companyPostJob.find();
        //console.log(job_info);
        res.send(job_info);
    } catch (error) {
        console.log(error);
    }
});
router.get('/workerDashboard/getInternPosting', async (req, res) => {
    try {
        const intern_info = await companyPostInternship.find();
        //console.log(intern_info);
        res.send(intern_info);
    } catch (error) {
        console.log(error);
    }
});
router.get('/workerDashboard/getFreelancePosting', async (req, res) => {
    try {
        const freelance_info = await companyPostFreelance.find();
        //console.log(freelance_info);
        res.send(freelance_info);
    } catch (error) {
        console.log(error);
    }
});
router.post('/workerDashboard/getJobsPosting/applyForJob', async (req, res) => {
    try {
        console.log(req.body);
    } catch (error) {
        console.log(error);
    }
});
// router.get('/companyDashboard/getJobCount', Cauthenticate, async (req, res) => {
//     try {
//         const posted = req.companyId;
//         //console.log(cid);
//         const ccount = await companyPostJob.countDocuments({ postedBy: posted });
//         if (ccount > -1) {
//             res.status(200).json(ccount);
//         }

//     } catch (error) {
//         console.log(error);
//     }
// })

router.get('/myJobs', Cauthenticate, async (req, res) => {
    try {
        const jbs = req.companyId;
        const job_info = await companyPostJob.find({ postedBy: jbs });
        //console.log(job_info);
        res.send(job_info);
    } catch (error) {
        console.log(error);
    }
});
router.get('/myInternships', Cauthenticate, async (req, res) => {
    try {
        const jbs = req.companyId;
        const job_info = await companyPostInternship.find({ postedBy: jbs });
        //console.log(job_info);
        res.send(job_info);
    } catch (error) {
        console.log(error);
    }
});
router.get('/myFreelancing', Cauthenticate, async (req, res) => {
    try {
        const jbs = req.companyId;
        const job_info = await companyPostFreelance.find({ postedBy: jbs });
        //console.log(job_info);
        res.send(job_info);
    } catch (error) {
        console.log(error);
    }
});
module.exports = router;