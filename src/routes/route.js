const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
   // logger.welcome()

    res.send('My second ever api!')
});

router.get('/movies', function (req, res){
    let movie = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    res.send(movie)
})

router.get('/movies/:indexNumber', function(req, res){
    let movie1 = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins', 'Avengers The End Game']
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let movieName = requestParams.indexNumber
    //console.log('Name of the movie is ', movie1[movieName])
    
    //res.send(movie1[movieName])

    if (movieName>movie1.length){

        console.log("Length Exceeded")
        res.send("Length Exceeded")
    }
    else{
        console.log('Name of the movie is ', movie1[movieName]) 
        res.send(movie1[movieName])
    }
})



router.get('/films', function (req, res) {

    let films = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
       
    console.log(films)
    
   // logger.welcome()

    res.send(films)
});


router.get('/films/:filmId', function (req, res) {

    let films = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]

       let requestParams = req.params
       console.log("This is the request "+ JSON.stringify(requestParams))
       let movieId = requestParams.filmId
    //console.log(movieId)
    //console.log(films[1])
    //let i = films.length

    if (movieId>films.length){

        console.log("No such movie exist")
        res.send("Length Exceeded")
    }
    else{
        console.log('Index of the movie is ', JSON.stringify(requestParams)) 
        res.send(films[movieId])
    }
    
   // logger.welcome()

    
});


module.exports = router;