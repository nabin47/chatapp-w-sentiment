const mongoose = require("mongoose");
const app = require("./index");

require("dotenv").config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Connected to the Mongodb Database");
});

app.listen(8800, () => {
    console.log("Backend server is running!");
})