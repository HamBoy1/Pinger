const request = require('request');

var status= new String('');

function ping(){
  request('http://www.google.com', function (error, response) {
    if(error){
      status="down";
    } else {
      status="up";
    }
    console.log(status);
  });
}

module.exports = {ping}
