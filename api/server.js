// BUILD YOUR SERVER HERE
const express = require("express");

const server = express();

server.use(express.json());

const db = require("./users/model.js")



server.get("/", (req, res) => {
    res.json({message: "hello"})
})


// Get Users
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


// Get User by id
server.get("/user/:id", (req, res) =>{
    db.findById()
    .then(
        
        function (x) {
            
            console.log(x)
            res.json(x)
        }
    )
    .catch(
        function (err) {
            console.log(err)
        }
    )
})

// Create User

// server.post("/users", (req, res)=>{
//     db.insert()
//     .then(
//         // the promise response here is the new user
//         function (x) {
//             res.json(x)
//         }
//     )
//     .catch(
//         // error
//         function (err) {
//             console.log(err)
//         }
//     )
// })


// Delete User by id

server.delete("/users/:id", (req, res) => {
    const id = res.id
    db.remove(id)
})


// Update User

server.put("/users/:id", (req, res) =>{
    db.update()
})






module.exports = server; // EXPORT YOUR SERVER instead of {}
