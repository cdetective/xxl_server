const mysql = require('mysql');
const config = require('../config/mysql_config').mysqlConfig;

var connection = null;
exports.init = function () {
    connection = mysql.createConnection(config);
    connection.connect();
};

exports.getHighScores = function (back) {
    let sql = `SELECT * FROM t_highs`;
    query(sql, back);
}

exports.insertHighScore = function (name, score, back) {
    let sql = `INSERT INTO t_highs(_name, _score)VALUES('${name}', ${score})`;
    query(sql, back);
}

exports.getHighScoreSort = function (rankCount, back) {
    let sql = `SELECT * FROM t_highs ORDER BY _score DESC LIMIT ${rankCount}`;
    query(sql, back);
}

function query(sql, back) {
    connection.query(sql, function (error, results, fields) {
        if (error) {
            return back(error);
        }
        return back(error, results);
    });
}
