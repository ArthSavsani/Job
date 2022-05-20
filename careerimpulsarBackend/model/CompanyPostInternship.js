const mongoose = require("mongoose");
const CompanyPostInternshipSchema = mongoose.Schema({
    Title: {
        type: String,
        require: true
    },
    type: {
        type: String,
        required: true
    },
    location:
    {
        type: String,
        require: true
    },
    internwork:
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
    stipend:
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
    sdate:
    {
        type: String,
        require: true
    },
    duration:
    {
        type: String,
        require: true
    },
    openings:
    {
        type: Number,
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
    },
    postedOn:
    {
        type: Date,
        require: true
    }
});
const companyPostInternship = new mongoose.model("internship", CompanyPostInternshipSchema);
module.exports = companyPostInternship;