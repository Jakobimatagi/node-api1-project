// BUILD YOUR SERVER HERE
const express = require("express");

const server = express();

server.use(express.json());

const db = require("./users/model.js")



server.get("/", (req, res) => {
    res.json({message: "hello"})
})

server.get("/users", (req, res) => {
    db.find()
        .then(
         // the promise response here is the users array
         function (x) {
             console.log(x)
             res.json(x)
         }
        
        )
        .catch({
         // no info is retrieved
         function (err) {
             console.log(err)
         }
        })
})
module.exports = server; // EXPORT YOUR SERVER instead of {}
