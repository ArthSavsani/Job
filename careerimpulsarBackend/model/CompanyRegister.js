const mongoose = require("mongoose");
const jwttoken = require("jsonwebtoken");
require('dotenv').config();
const CompanyRegistrationSchema = mongoose.Schema({
    companyName: {
        type: String,
        require: true
    },
    workEmail: {
        type: String,
        required: true,
        unique: true
    },
    password:
    {
        type: String,
        require: true
    },
    ctokens: [
        {
            ctoken: {
                type: String,
                required: true,
            }
        }
    ]
});
// Generate JsonWebTokem for company
CompanyRegistrationSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwttoken.sign({ _id: this._id }, process.env.C_SECRETKEY);
        this.ctokens = this.ctokens.concat({ ctoken: token });
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }
}

const companyRegistration = new mongoose.model("CompanyRegistration", CompanyRegistrationSchema);
module.exports = companyRegistration;