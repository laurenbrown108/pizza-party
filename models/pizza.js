const orm = require("../config/orm")

var pizza = {
    all: function(cb) {
        orm.all("pizza", function(res) {
            return cb(res)
        });
    },
    add: function(cols, vals, cb) {
        orm.add("pizza", cols, vals, function (res) {
             return cb(res);
        })
    },
    update: function(objColVals, condition, cb) {
        orm.update("pizza", objColVals, condition, function(res){
            cb(res);
        });
    }
}

module.exports = pizza;