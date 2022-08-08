const express = require('express');
const lodash = require('lodash')
const abc = require('../introduction/intro')
const logger = require('../logger/logger.js')
const formatter = require('../validator/formatter.js')
const helper = require('../util/helper.js')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
     let months = ['January','February','March','April','May','June','July','August','September','October','November','December'
        ];

        let result = lodash.chunk(months,4)
        console.log(result)
      let oddNumbers = ['1','3','5','7','9','11','13','15','17', '19']
         let result2 = lodash.tail(oddNumbers)
         console.log(result2)
         let arr1 = ['12', '68', '34', '98','65']
         let arr2 = ['18', '98', '44', '38','34']
         let arr3 = ['10', '12', '65', '78','25']
         let arr4 = ['12', '68', '34', '98','65']
         let arr5 = ['12', '12', '34', '98','65']
    logger.welcome()
    formatter.trim()
    formatter.changeToLowerCase()
    formatter.changeToUpperCase()
    helper.printDate()
    helper.printMonth()
    helper.getBatchInfo()
    
    res.send('My second ever api!!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason