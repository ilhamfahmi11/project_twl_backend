import mysql from 'mysql2';
import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";


//const express = require("express");
//const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);

const db = mysql.createConnection({
    host: "bywqzudzwv2bbojde76h-mysql.services.clever-cloud.com",
    user: "uhl3p5jjhi5nuq3v",
    password: "Hm9cZHXxTb9ZZy8QSXbo",
    database: "bywqzudzwv2bbojde76h"
})

app.post('/data_db', (req, res) => {
    const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.post('/login', (req, res) => {
  const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json("Berhasil");
    } else {
      return res.json("Gagal");
    }
  });
});

app.listen(5000, ()=> console.log('Database Berhasil Terhubung'));

//mengatur koneksi ke database