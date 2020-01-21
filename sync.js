var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "securifi@123",
    database : 'Registration_Details'
  });
  con.connect(function(err) {
if (err) throw err;
  });
  var result=con.query("SELECT*from users_details");
  console.log("first");
  console.log("second");