const db = require('./sqlopera/com_sql');// 引入 express 模块
const express = require('express');
const {useMysql} = require('./config/server_config');

class nameScore {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
}

var server = class {
    //
    constructor() {
        this.__ = "this is a book";
        this.m_highScoreArray = [];
        this.m_httpapp = null;
        this.c_HIGH_LENGTH = 10;
    }

    //
    start() {
        console.info('------Server starting------');
        console.info('-- sql init --');
        db.init();
        console.info('-- sql init over --');
        console.info('-- http init --');
        this.httpStart();
        console.info('-- http init over --');
        console.info('-- this init --');
        this.init();
        console.info('-- this init over --');

        console.debug('test');
        this.test();
    }

    init() {
        if (useMysql) {
            setInterval(() => {
                db.getHighScoreSort(this.c_HIGH_LENGTH, (err, result) => {
                    if (err) {
                        return;
                    }
                    //
                    this.m_highScoreArray = result;
                });
            }, 1e3)
        } else {
            for (let i = 0; i < this.c_HIGH_LENGTH; i++) {
                this.m_highScoreArray.push(new nameScore('Waiting for nothing', 1e4));
            }
        }
    }

    //
    httpStart() {
        // 创建 express 实例
        this.m_httpapp = express();
        let app = this.m_httpapp;
        //设置跨域访问
        app.all('*', function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "X-Requested-With");
            res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
            res.header("X-Powered-By", '3.2.1');
            res.header("Content-Type", "application/json;charset=utf-8");
            next();
        });
        app.get('/', function (req, res) {
            res.send('Hello Express!');
        }.bind(this));
        app.get('/getHighScore', function (req, res) {
            try {
                res.send(JSON.stringify(this.m_highScoreArray));
            } catch (e) {
                console.error('#error52', req.query);
                res.send('');
            }
        }.bind(this));
        app.get('/setHighScore', function (req, res) {
            let name = req.query.name;
            let score = req.query.score;
            if (useMysql) {
                db.insertHighScore(name, score, (err, result) => {
                    if (err) {
                        console.error('#error61', req.query, err);
                        res.send('nook');
                        return;
                    }
                    res.send('ok');
                });
            } else {
                //
                this.m_highScoreArray.push(new nameScore(name, score));
                this.m_highScoreArray.sort(function (l, r) {
                    return r.score - l.score;
                })
                this.m_highScoreArray.splice(this.c_HIGH_LENGTH, 1);
                res.send('ok');
            }
        }.bind(this));
        // 监听到8000端口
        app.listen(8083, function () {
            console.log('http is listening at port 8083');
        });
    }

    test() {
    }
}
exports.server = server;
