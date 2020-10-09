const express = require("express");
const pizza = require("../models/pizza");
const router = express.Router();

router.get("/", function (req, res) {
    pizza.all(function (data) {
        var pizzaTime = {
            pizza: data
        }
        console.log(pizzaTime);
        res.render("index", pizzaTime);
    });
});

router.post("/api/pizza", function (req, res) {
    pizza.add(["pizza_name"], [req.body.pizza_name], function (response) {
        res.json({ pizza_name: res.pizza_name })
    })
})

router.put("/api/pizza/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    pizza.update({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;