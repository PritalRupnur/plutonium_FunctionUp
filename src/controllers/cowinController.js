let axios = require("axios")

// GOTO  http://api.openweathermap.org => “subscribe” current weather data ==> 
//get api key for Free version ==> create new account and Verify your 
//emailId( Must verify to avoid issues) => go to My APi keys under your account
// name(top right corner) or https://home.openweathermap.org/api_keys => 
//save the key/appid somewhere. Now proceed further.
// Create API's to do the following:


let getWether = async function (req, res) {

    try {
        let cities =     [ "Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"] 
        let empObj = []
        for (let i=0; i<cities.length; i++)
        {
       
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=c8283a7de9b645a674d142f2338889e2`
        }
        let result = await axios(options);
       
       
        let data1 = result.data.main.temp
        empObj.push({city:cities[i],temp:data1})
       empObj.sort(function(a, b){return a.temp-b.temp})
        
    }res.status(200).send({ msg: empObj, status: true })
}
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

// 1.  WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" 
// for any given district id and for any given date. 
// This is a very basic assignment and totally along the lines of what we covered in the session

let getDisctById = async function (req, res) {

    try {
        let id = req.query.district_id 
        let date = req.query.date
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
// 3. Axios POST request assignment Statement:
// Step1: Get all the memes at Postman (https://api.imgflip.com/get_memes)
// Step 2 : Pick a memeId you want (Eg 129242436) for the POST request (from the result from  above )
// Assignment: Create a Post request API (https://api.imgflip.com/caption_image) with only query params.
// Following are the params (copy username and password exactly as given below OR incase you find error in
// using this username password due to too many people trying to access it, 
//then create your own account and plz do share username password on your group so that others can 
//use it too- be kind and helpful):

let getMeme = async function (req, res) {

    try {
        let ID = req.query.template_id
        let Text0 = req.query.text0
        let Text1 = req.query.text1
        let userName = req.query.username
        let passWord = req.query.password

        let options = {
            method: 'post',
            url: `https://api.imgflip.com/caption_image?template_id=87743020&text0=hello&text1=hieee&username=chewie12345&password=meme@123`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getStates = async function (req, res) {

    try {
        
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}




let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getDisctById = getDisctById
module.exports.getWether = getWether
module.exports.getMeme = getMeme