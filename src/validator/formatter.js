var a = "   Hello! FunctionUp   "
let trim = function() {
    console.log(a.trim())
}
let changeToLowerCase = function() {
    console.log(a.toLowerCase())
}
let changeToUpperCase = function() {
    console.log(a.toUpperCase())
}

module.exports.trim = trim
module.exports.changeToLowerCase = changeToLowerCase
module.exports.changeToUpperCase = changeToUpperCase