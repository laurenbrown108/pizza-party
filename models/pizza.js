const orm = require("../config/orm")

var pizza = {
    all: function(cb) {
        orm.all("pizza", (res) => {
            return cb(res)
        });
    },
    add: function(cols, vals, cb) {
        orm.add("pizza", cols, vals, (res) => {
             return cb(res);
        })
    },
    update: function(objColVals, condition, cb) {
        orm.update("pizza", objColVals, condition, (res) => {
            cb(res);
        });
    },

    delete: function(val, cb) {
        orm.delete("pizza", "id", val, (res) => {
            cb(res);
        })
        
    }
}

module.exports = pizza;