const mongoose = require("mongoose");
const jwttoken = require("jsonwebtoken");
require('dotenv').config();
const WorkerRegistrationSchema = mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        //required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:
    {
        type: String,
        require: true
    },
    tokens: [
        {
            token: {
                type: String,
                required: true,
            }
        }
    ]
});

// Generate JsonWebTokem for workers
WorkerRegistrationSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwttoken.sign({ _id: this._id }, process.env.SECRETKEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }
}
const workerRegistration = new mongoose.model("WorkerRegistration", WorkerRegistrationSchema);
module.exports = workerRegistration;