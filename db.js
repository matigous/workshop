var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "kinalocko22",
  port: 3306,
  database: "lista"
});

con.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log('Connected!:)');
  }
});

module.exports = con;

