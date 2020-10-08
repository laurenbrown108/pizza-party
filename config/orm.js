const connection = require("../config/connection")
//do i need to add .js?

const orm = {

    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb (result);
        });
    }
// selectAll(){
//     var queryString = "SELECT * FROM ?? WHERE ?? = ?";
// },
// insertOne(){},
// updateOne(){},

}

module.exports = orm;