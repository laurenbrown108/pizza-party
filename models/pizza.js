const orm = require("../config/orm")

var pizza = {
    all: function(cb) {
        orm.all("pizza", function(res) {
            return cb(res)
        })
    }
}

module.exports = pizza;