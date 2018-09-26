var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'bbs'
});
 
connection.connect();
 
connection.query('SELECT username from user', function (error, results, fields) {
  if (error) throw error;
  console.log('username', results);
});