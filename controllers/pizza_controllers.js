const express = require("express");
const pizza = require("../models/pizza");
const router = express.Router();

router.get("/", function (req, res){
    console.log("HI!");
    //THIS IS SHOWING UP.
    pizza.all(function(data){
        var pizzaTime = {
            pizza: data
        }
        console.log(pizzaTime);
        res.render("index", pizzaTime);
    });
});

module.exports = router;