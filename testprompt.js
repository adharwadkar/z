/* var prompt = require('prompt');

  prompt.start();

  prompt.get(['username', 'email'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log('  Username: ' + result.username);
    console.log('  Email: ' + result.email);
  });

  function onErr(err) {
    console.log(err);
    return 1;
  }
*/

console.log(process.argv.length);
  if (process.argv.length != 3) {

    console.log("please provide a city Name Eg: node testprompt.js Dallas");
    process.exit(-1);
}
 
//var param = process.argv[0];
//var param = process.argv[1];
var param = process.argv[2];

console.log('Param: ' + param);