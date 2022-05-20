const mongoose = require("mongoose");
const CompanyPostFreelanceSchema = mongoose.Schema({
    ttitle: {
        type: String,
        require: true
    },
    tdescription: {
        type: String,
        required: true
    },
    wduration:
    {
        type: String,
        require: true
    },
    omoney:
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
    }
});
const companyPostFreelance = new mongoose.model("Freelance", CompanyPostFreelanceSchema);
module.exports = companyPostFreelance;