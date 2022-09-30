/* 
    mysql 연동
    DB를 사용하지 않기 때문에 데이터는 비어있음
*/

var mysql = require('mysql');
var connection = mysql.createConnection ({
        host:'localhost',
        user:'root',
        password:'root',
        database:'arsenalDB'
    });

connection.connect();

connection.query('SELECT * FROM arsenal', function (error, result, fields) {
    if (error) {
        console.log(error);
    }
    console.log(result);
});

connection.end();