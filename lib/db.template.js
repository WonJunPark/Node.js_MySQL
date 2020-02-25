//버전관리시 사용, 보안상 문제
var mysql = require('mysql');

var db = mysql.createConnection({
  host:'',
  user:'',
  password:'',
  database:''
});
db.connect();

module.exports = db;
