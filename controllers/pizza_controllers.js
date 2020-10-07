const express = require("express");
const pizza = require("../models/pizza");
const router = express.Router();

router.get("/", function (req, res){
    console.log("HI!");
})

module.exports = router;