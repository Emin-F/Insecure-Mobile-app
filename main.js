
var mysql = require('mysql2');
const express = require('express');
const {response} = require("express");
const {int31Write} = require("mysql/lib/protocol/Auth");
const app = express();
app.use(express.json());

var id=1;
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.get("/status", (req, res, next) => {
    res.json({"message": "Server Running"});
});

app.post("/register", (req, res, next) => {
    const username1 = req.body.username;
    const password1 = req.body.username;
    console.log("register istegi geldi");

    var sql = "INSERT INTO users VALUES (id, username1, password1)";
    id=id+1;
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
});


app.post("/login", function (req, res, next)  {
    const username1 = req.body.username;
    const password1 = req.body.password;
  console.log("login istegi geldi");
    if (username1 && password1) {
        // Execute SQL query that'll select the account from the database based on the specified username and password
        connection.query('SELECT * FROM accounts WHERE username = +req.body.username AND password = +req.body.password', function (error, results, fields) {
            // If there is an issue with the query, output the error
            if (error) throw error;
            // If the account exists
            if (results.length > 0) {
                request.session.loggedin = true;
                request.session.username = username;
                //redirect yapsın bir yere

            } else {
                response.send('Incorrect Username and/or Password!');
            }
            response.end();
        });
    }else {
            response.send('Please enter Username and Password!');
            response.end();
        }
        });


        var con = mysql.createConnection()({
            host: 'localhost',
            database: 'USERS',
            user: 'root',
            password: 'password',

        });

        con.connect(function (err) {
            if (err) {
                console.log("baglanamadi!", err);
            } else {
                console.log("okkkkey db!");

            }
            con.end();

        });


        app.get("/profile/:id", (req, res, next) => {
             connection.query('SELECT FROM users WHERE userID = +req.params.id ', function (error, results, fields) {
                 if (error) throw error;
                 res.json(results);
             });
        });


        app.get("/profile/admin", (req, res, next) => {
            if (req.body.params.isAdmin === ture) {
                res.json("welcome to admin panel bro, you got this. You bypass the auth check");
            } else {
                res.json("try harder go with easy parameters");
            }
        });


