var fibonacci = require('fibonacci-fast');
/*var result = fibonacci.get(3000);

var result = fibonacci.find(13);
var index = result.index;

fibonacci.is(34);
//console.log(index);

var fibs = fibonacci.iterator();
 var sum =0;
//for (let i = 0; i < 5; i++) {
 // var fib = fibs.next().value;
  //console.log(`F[${fib.index}] = ${fib.number.toString()}`);
  //sum +=fibs.next().value;
//}


 //var array = fibonacci.array(5, 11).map(x => x.number.toString());

 
//var Big = require('big.js');
var sum = 0;
var array = fibonacci.array(1,11).map(x =>Number(x.number));

for(var i=0;i<10;i++){
  console.log("fibonacci series:"+array[i]);
  
	}


for(var i=0;i<10;i++){
	if((array[i])%2!==0){
  console.log("array value:"+array[i]);
  //console.log("sum is = "+sum);
  sum+=array[i];
  }
	}
  
  console.log("sum is "+sum); 
*/
  
//var fsum = fibonacci.array(1,36).map(x =>{ Number(x.number)}).filter(n=>{(n%2!=0)?n:null}).reduce(k=>{k+k});

module.exports = function(){
  return fibonacci.array(1,11).map(x =>Number(x.number)).filter(n=>(n%2!=0)?n:null).reduce(function(sum,n){
  // console.log("array value"+ n);
   return sum+n},0);
}
//console.log("sum is"+fsum);
//console.log("sum is ",fsum);
//https://www.npmjs.com/package/fibonacci-fast 
//https://www.npmjs.com/package/big.js  