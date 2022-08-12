const { query } = require('express');
const express = require('express');
const router = express.Router();
//const UserModel=require("../models/userModel")
let players = []

router.post('/players', function (req, res) {



    let newPlayers = req.body

    let player = players.find(a => a.name == newPlayers.name)
    
    if (!player) {
        players.push(newPlayers)
        console.log(players)
        res.send(players)

    }
    else {

        res.send("player already exist!!!")
    }

})



router.post("/players/:Name/bookings/:bookingnumber", function (req, res) {
    let newPlayers = req.params.Name
    let bookId = req.params.bookingnumber
    let player = players.find(a => a.name == newPlayers)
    if (!player) {

        return res.send("player does not exist")
       


    }
    else{
        const booking = player.bookingDetails.find(a=>a.bookingNumber==bookId)
        const details = req.body; 
        if(!booking){
            player.bookingDetails.push(details);
            return res.send(players);
        }
        else{
            return res.send("Booking already processed");
        }
    }
        

    

})

let person = [{

    name: "prital",
    age: 21,
    votingStatus: false
}, {

    name: "rohit",
    age: 20,
    votingStatus: false
}, {

    name: "sonu",
    age: 28,
    votingStatus: false
}, {

    name: "monu",
    age: 12,
    votingStatus: false
}, {

    name: "ganu",
    age: 40,
    votingStatus: false
}]


router.post("/voters", function (req, res) {
    //router.get('/person', function (req, res) {
        let Element = req.query.age
        // console.log(Element)
        for (let i = 0; i < person.length; i++) {
            if (person[i].age >= Element) {
                person[i].votingStatus = true
    
            }
    
        }
        let arr = []
        for (let i = 0; i < person.length; i++) {
            if (person[i].votingStatus == true) {
                arr.push(person[i])
            }
    
        }
        res.send({ data: arr })
    
    
   })
//             let req_age = req.query.votingAge
            
            
    
//     for (let i = 0; i <= people.length; i++) {
       
//         // console.log(people[i].age);
//         let Voting_age = people[i].age
//         if (Voting_age>=req_age) {
//             people[i].votingStatus = true
//         }
//     }
//    let x = people.filter(a=>a.votingStatus==true)
//    console.log(x)
   
    
//     res.send("hi FunctionUp")
// })




// post("/createUser", function (req, res) {
   
//    let data = req.body
//    console/log(data)
//   // let savedData = await UserModel.create(data)//to interact with data base
//     res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
// })





router.post("/test-post-3", function (req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log(req.body)

    res.send({ msg: "hi", status: true })
})



router.post("/test-post-4", function (req, res) {
    let arr = [12, "functionup"]
    let ele = req.body.element
    arr.push(ele)
    res.send({ msg: arr, status: true })
})

module.exports = router;