const express = require("express");
const mysql = require("mysql");
const dotenv = require("dotenv");
const path = require("path");

const app = express();

dotenv.config({ path: './.env' });



const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

const publicDirectory = path.join(__dirname, "final", "fontend", "homepage"); // Set the root directory for static files

app.use(express.static(publicDirectory));

db.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("MySQL connected");
    }
});

app.get("/", (req, res) => {
    res.sendFile("C:/Users/PC/my-app/Final-Mr.Binh/final/fontend/login/index.html");
});

app.listen(5000, () => {
    console.log("Server started on Port 5000");
});


