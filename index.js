const express = require("express");
const session = require("express-session");
const mysql = require('mysql');
const moment = require("moment");
const bcrypt = require("bcrypt");
const saltRounds = 10;
require("dotenv").config();
const app = express();
const pool = dbConnection();

app.set('trust proxy', 1) // trust first proxy
app.use(session ({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: true}
}))

app.set("view engine", "ejs");
app.use(express.static("public"));

//to parse Form data sent using POST method
app.use(express.urlencoded({ extended: true }));

//routes
app.get('/', (req, res) => {
    res.render('login', {title: 'Splasher! - Login'})
});

app.get('/home', isAuthenticated, (req, res) => {
    res.render('home');
});

app.get("/dbTest", async function (req, res) {
    let sql = "SELECT CURDATE()";
    let rows = await executeSQL(sql);
    res.send(rows);
});//dbTest

//functions
async function executeSQL(sql, params) {
    return new Promise(function (resolve, reject) {
        pool.query(sql, params, function (err, rows, fields) {
            if (err) throw err;
            resolve(rows);
        });
    });
}//executeSQL

function isAuthenticated(req, res, next) {
    if (req.session.authenticated) {
        next();
    } else {
        res.redirect('/')
    }
}

//values in red must be updated
function dbConnection() {

    const pool = mysql.createPool({

        connectionLimit: 10,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE

    });

    return pool;

} //dbConnection

//start server
app.listen(3000, () => {
    console.log("Expresss server running...")
})
