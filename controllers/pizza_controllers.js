const express = require("express");
const pizza = require("../models/pizza");
const router = express.Router();

router.get("/", (req, res) => {
    pizza.all( (data) => {
        var pizzaTime = {
            pizza: data
        }
        console.log(pizzaTime);
        res.render("index", pizzaTime);
    });
});

router.post("/api/pizza", (req, res) => {
    pizza.add(["pizza_name"], [req.body.pizza_name], (response) => {
        res.json({ pizza_name: res.pizza_name })
    })
})

router.put("/api/pizza/:id", (req, res) => {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    pizza.update({
        devoured: req.body.devoured
    }, condition, (result) => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/pizza/:id", (req, res) => {
    const pizzaID = req.params.id;

    pizza.delete(pizzaID, function (){
        res.status(200).end();
    })
    
  
  });

module.exports = router;