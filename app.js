console.log('test');

const yargs = require('yargs');
var require = require("./ping.js");


console.log(`Enter a number for how many minutes to run the pinger followed by a number for how often to ping`);
const argv = yargs.argv;

var mins = argv._[0]; //minutes to run the pinger
//var delay = argv._[1]; //time between pings

/*if(mins >= 0){ //check that mins is a valid int
  for(mins; mins > 0; mins--) {
    ping();
    if(status = 'up') {
      //print down
      //clear up
      //inc up
    }else if(status = 'down') {
      //print up
      //clear down
      //inc up
    }
    //delay(arg?)
  }

} else {
  console.log("please enter an integer value greater than 0");
}
*/
ping();

//https://api.myjson.com/bins/17pan5
