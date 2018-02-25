const request = require('request');

var status= new String('!');
var myVar = setInterval(function() {ping();}, 2000);
var runs = 0;

function ping() {
    request('http://www.google.com', function (error, response) {
      if(error){
        status="down";
      } else {
        status="up";
      }
      console.log(status);
      runs++;
      if(runs>=5){
        clearInterval(myVar);
      }
    });
  }


module.exports = {ping}
