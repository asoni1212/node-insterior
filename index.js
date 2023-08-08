import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
    host: 'localhost', // Replace with your database host name or IP address
    user: 'root',      // Replace with your database username
    password: '@Suman1212',  // Replace with your database password
    database: 'insterior_db'
})

app.use(express.json());
app.use(cors());

app.get("/", (req,res)=>{
    res.json("Hello I am db")
})

app.get("/user", (req,res)=>{
    const q = "SELECT * FROM USERS"
    db.query(q,(err,data)=>{
       if (err) return res.json(err);
        return res.json(data)
    });
});

app.post("/user", (req,res)=>{
    const qPost = 'INSERT INTO users (`username`, `password`) VALUES (?,?)';
    const values = [req.body.username,req.body.password];
    db.query(qPost,values,(err,data) => {
        if (err) return res.json(err);
        return res.json(data)
    })
})

app.listen(8806, () => {
    console.log("congratulations we are connected")
})