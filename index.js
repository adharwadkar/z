const fetch = require('node-fetch'),
  goodUrl = `http://api.openweathermap.org/data/2.5/weather?q=dallas&appid=9150d89e6ce163b0bccafddf9f2318d2&units=imperial&`,
  badUrl = 'http://blah'
var first = 'http://api.openweathermap.org/data/2.5/weather?q=';
var second = '&appid=9150d89e6ce163b0bccafddf9f2318d2&units=imperial&';

const printTemperatures = url =>
  fetch(url).then(r => r.json()).then(weatherData => {
    if (typeof weatherData.main == "undefined") {
      console.log(city + " is invalid city name");
    }
    else {
      const { temp_min: minTemp, temp_max: maxTemp } = weatherData.main
      console.log(`Minimum Temperature is ${minTemp}`)
      console.log(`Maximum Temperature is ${maxTemp}`)
    }
  }, error => { console.log(url + ' is not a valid URL') });

//validation for passing city name through command line.

if (process.argv.length != 3) {
  console.log("please provide a city Name Eg: node testprompt.js Dallas");
  process.exit(-1);
}

var city = process.argv[2];

printTemperatures(first + city + second);
printTemperatures(badUrl);

