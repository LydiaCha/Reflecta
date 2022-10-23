import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

try {
    mongoose.connect("mongodb+srv://bucks-reflecta:5UCDALrWdX1hgKd7@reflectacluster.bsnv952.mongodb.net/Reflecta?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        () => console.log("connected to DB"))
} catch (e) {
    console.log("could not connect");
}

const userSchema = new mongoose.Schema({
    userName: String,
    password: String
})

const Users = new mongoose.model("users", userSchema)

app.post("/get-user", (req, res) => {
    const { id } = req.body;
    Users.findOne({ _id: id }, (err, user) => {
        if (user) {
            console.log(user)

            res.send({ user: user })
        }
    }
    )
});

app.post("/login", (req, res) => {
    const { userName, password } = req.body;
    Users.findOne({ userName: userName }, (err, user) => {
        if (user) {
            if (password === user.password) {
                res.send({ message: "login sucess", user: user })
            } else {
                console.log('bad')
                res.send({ message: "wrong credentials" })
            }
        } else {
            console.log('no')
            res.send({ message: "not registered" })
        }
    })
});

app.post("/register", (req, res) => {
    const { userName, password } = req.body;
    Users.findOne({ userName: userName }, (err, user) => {
        if (user) {
            res.send({ status: 'failed', message: "user already exist" })
        } else {
            const user = new Users({ userName, password })
            user.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "sucessfully registered!" })
                }
            })
        }
    })
})

app.listen(5000, () => {
    console.log("started")
})