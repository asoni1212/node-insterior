import express from "express";
import mysql from "mysql";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";

const app = express();
dotenv.config();
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

app.use(express.json());
app.use(cors());
app.use(morgan('dev'))

app.get("/", (req,res)=>{
    res.json("Hello I am db")
})

app.get("/user", (req,res)=>{
    const q = "SELECT * FROM users"
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

app.listen(8080, () => {
    console.log("congratulations we are connected 8080" );

})