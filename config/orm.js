// Import MySQL connection.
var connection = require("../config/connection.js");

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

var orm = {
  all: function(table, cb){
    var queryStringSQL = "Select * From " + table + ";";
    connection.query(queryStringSQL, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    }); 
  },
  create: function(table, column, value, cb){
    var queryStringSQL = "INSERT INTO " + table + " (" + column.toString() + ") VALUES ?";
    connection.query(queryStringSQL, value, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    }); 
  },
  update: function(table, columnValue, condition, cb){
    var queryStringSQL = "UPDATE " + table;

    queryStringSQL += " SET ";
    queryStringSQL += objToSql(columnValue);
    queryStringSQL += " WHERE ";
    queryStringSQL += condition;

    console.log(queryStringSQL);
    connection.query(queryStringSQL, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

module.exports = orm;