// users route for user related operations

const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("hey it's user page");
})

module.exports = router;