var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "securifi@123",
    database : 'chandu'
  });
  con.connect(function(err) {
if (err) throw err;
  });
 con.query("SELECT*from chat",function(result){
      console.log("first");
  })
  console.log("second")
