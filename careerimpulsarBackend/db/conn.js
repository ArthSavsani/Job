const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/CareerImpulsar", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connection Successful");
}).catch((e) => {
    console.log("Connection Failed");
    console.log(e);
})