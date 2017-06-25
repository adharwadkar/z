var fibonacci = require('fibonacci-fast');

module.exports={sum : function (upperLimit) {

return fibonacci.array(1, upperLimit).map(x => Number(x.number)).filter(n => (n % 2 != 0) ? n : null).reduce(function (sum, n) {
    return sum + n}, 0);

}
} 

console.log("The sum of the fibonaccie= "+ module.exports.sum(11));