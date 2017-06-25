const fetch = require('node-fetch'),
  goodUrl = `http://api.openweathermap.org/data/2.5/weather?q=chicago&appid=9150d89e6ce163b0bccafddf9f2318d2&units=imperial&`,
  badUrl = 'http://blah'

const printTemperatures = url =>
  fetch(url).then(r => r.json()).then(weatherData => {
    const { temp_min: minTemp, temp_max: maxTemp } = weatherData.main
    console.log(`Minimum Temperature is ${minTemp}`)
    console.log(`Maximum Temperature is ${maxTemp}`)
  })

printTemperatures(goodUrl)
printTemperatures(badUrl)