today = new Date()
let printDate = function() {
    console.log(new Date().toDateString())
}

let printMonth = function() {
    console.log(today.getMonth())
}
let getBatchInfo = function() {
    console.log('Plutonium, W3D3, the topic for today is Nodejs module system')
}

module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo
