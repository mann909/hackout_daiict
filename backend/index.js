import express from 'express';
import pg from 'pg';
import env from 'dotenv';
import bcrypt from 'bcrypt';
import cors from 'cors';

const app = express();
const saltRounds = 10;
env.config();

const db = new pg.Client({
    user: process.env.user,
    host: process.env.host,
    database: process.env.database,
    password: process.env.password,
    port: process.env.port,
});
db.connect();

app.use(cors());
app.use(express.json()); // Use express.json() to parse JSON payloads
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("API is running");
});

app.post("/signup", async (req, res) => {
    if (!req.body.password) {
        return res.status(400).send({ msg: "Password is required" });
    }
    bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
        if (err) {
            res.status(400).send({ msg: "Error occurred in hashing password" });
        } else {
            try {
                await db.query(
                    'INSERT INTO user_info(name,email,phone,type,password) values ($1,$2,$3,$4,$5)',
                    [req.body.name, req.body.email, req.body.contactNumber, req.body.userType, hash]
                );
                console.log("VALUE WAS INSERTED INTO THE DB")
                res.status(200).send({ msg: "OK" });
            } catch (err) {
                if (err.code === "23505") {
                    const fail = err.detail.split(" ")[1].split("=")[0];
                    res.status(400).send({ msg: `The ${fail.substring(1, fail.length - 1)} already exists` });
                } else {
                    res.status(400).send({ msg: "Error occurred in signing up" });
                }
            }
        }
    });
});

app.post("/login", async (req, res) => {
    try {
        const data = await db.query('SELECT * FROM user_info WHERE email = $1 OR phone = $1', [req.body.identifier]);
        if (data.rows.length !== 0) {
            bcrypt.compare(req.body.password, data.rows[0].password, (err, valid) => {
                if (err) {
                    res.status(400).send({ msg: "Error checking password" });
                } else {
                    if (valid) {
                        res.status(200).send({ msg: "OK",data:data.rows[0] });
                    } else {
                        res.status(400).send({ msg: "Wrong password" });
                    }
                }
            });
        } else {
            res.status(400).send("This username does not exist");
        }
    } catch (err) {
        res.status(400).send("Error occurred in authentication");
    }
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
