// authorization route for login and creating user

const router = require("express").Router();
const User = require("../models/User");

// Register
router.get("/register", async (req, res) => {
    const user = await new User({
        username:"Rahim",
        email:"rahim@gmail.com",
        password:"12345"
    })

    await user.save();
    res.send("OK");
})

module.exports = router;