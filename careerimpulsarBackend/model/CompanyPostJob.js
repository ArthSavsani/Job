const mongoose = require("mongoose");
const CompanyPostJobSchema = mongoose.Schema({
    jobtitle: {
        type: String,
        require: true
    },
    experiance: {
        type: String,
        required: true
    },
    location:
    {
        type: String,
        require: true
    },
    jobtype:
    {
        type: String,
        require: true
    },
    position:
    {
        type: String,
        require: true
    },
    aboutcompany:
    {
        type: String,
        require: true
    },
    qualifications:
    {
        type: String,
        require: true
    },
    course:
    {
        type: String,
        require: true
    },
    salary:
    {
        type: String,
        require: true
    },
    mskills:
    {
        type: String,
        require: true
    },
    oskills:
    {
        type: String,
        require: true
    },
    time:
    {
        type: String,
        require: true
    },
    postedBy:
    {
        type: String,
        require: true
    },
    companyName:
    {
        type: String,
        require: true
    }
});
const companyPostJob = new mongoose.model("job", CompanyPostJobSchema);
module.exports = companyPostJob;