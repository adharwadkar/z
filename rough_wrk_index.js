const readline = require('readline');
const fetch = require('node-fetch'),
    goodUrl = `http://api.openweathermap.org/data/2.5/weather?q=dallas&appid=9150d89e6ce163b0bccafddf9f2318d2&units=imperial&`,
    badUrl = 'http://blah'


const printTemperatures = url =>
    fetch(url).then(r => r.json()).then(weatherData => {
        if (typeof weatherData.main == "undefined") {
            console.log(city + " city is not valid");
        }
        else {
            const { temp_min: minTemp, temp_max: maxTemp } = weatherData.main
            console.log(`Minimum Temperature is ${minTemp}`)
            console.log(`Maximum Temperature is ${maxTemp}`)
        }
    }, error => { console.log(url + ' is not a valid URL') });

/* 
var rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});  
 */
var first = 'http://api.openweathermap.org/data/2.5/weather?q=';

var second = '&appid=9150d89e6ce163b0bccafddf9f2318d2&units=imperial&';

/*var recursiveAsyncReadLine = function () {
    rl.question('Enter City(Type "exit" if you do not have any inputs): ', function (answer) {
        //if (answer == 'exit') //we need some base case, for recursion                
		//closing RL and returning from function.
       // printTemperatures(goodUrl);
		//var finalUrl=first+answern    +second;
		//console.log(goodUrl);
		//console.log(finalUrl);
		printTemperatures(first+answer+second);
		return rl.close();
        //console.log("This is answer: "+answer);		
        //recursiveAsyncReadLine(); //Calling this function again to ask new question
    });
};
recursiveAsyncReadLine();
*/

if (process.argv.length != 3) {
    console.log("please provide a city Name Eg: node testprompt.js Dallas");
    process.exit(-1);
}

//var param = process.argv[0];
//var param = process.argv[1];
var city = process.argv[2];

//console.log('Param: ' + city);

printTemperatures(first + city + second);
printTemperatures(badUrl);

//refernece 

//http://jttan.com/2016/06/node-js-basic-command-line-interactive-loop/
//https://howtonode.org/promises
//install bower
