const { query } = require('express');
const express = require('express');
const router = express.Router();

let players = []

router.post('/players', function (req, res) {



    let newPlayers = req.body

    let player = players.find(a => a.name == newPlayers.name)
    console.log(player)
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

let people = [{

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
        // let Element = req.query.age
        // // console.log(Element)
        // for (let i = 0; i < person.length; i++) {
        //     if (person[i].age >= Element) {
        //         person[i].votingStatus = true
    
        //     }
    
        // }
        // let arr = []
        // for (let i = 0; i < person.length; i++) {
        //     if (person[i].votingStatus == true) {
        //         arr.push(person[i])
        //     }
    
        // }
        // res.send({ data: arr })
    
    
   // })
            let prital = req.query.age
            
            console.log(prital)
    
    for (let i = 0; i <= people.length; i++) {
       
        // console.log(people[i].age);
        let premal = people[i].age;
        if (premal>=prital) {
            people[i].votingStatus = true
        }
    }
   let x = people.filter(a=>a.votingStatus==true)
   console.log(x)
   
    
    res.send("hi FunctionUp")
})


router.get("/test-api-2", function (req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3", function (req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4", function (req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5", function (req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6", function (req, res) {
    res.send({ a: 56, b: 45 })
})

router.post("/test-post", function (req, res) {
    res.send([23, 45, 6])
})


router.post("/test-post-2", function (req, res) {
    res.send({ msg: "hi", status: true })
})

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