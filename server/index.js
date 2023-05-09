const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root123",
    database:"cruddatabase",
})

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));

// db.connect(function(err){
//     if (err) {
//       return console.error("Ошибка: " + err.message);
//     }
//     else{
//       console.log("Подключение к серверу MySQL успешно установлено");
//     }
//  });

app.post("/api/insert",(req,res) => {
    const cryptoName = req.body.cryptoName;
    const cryptoPrice = req.body.cryptoPrice;

    const sqlInsert = "INSERT INTO cryptocurrency (cryptoName,cryptoPrice) VALUES (?,?)"

    db.query(sqlInsert,[cryptoName,cryptoPrice], (err,result) => {
        console.log(err);
    })
})

app.listen(3001,() => {
    console.log('running on port 3001')
})