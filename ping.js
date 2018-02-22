const request = require('request');

var status= "";

ping = function() {
  request({
    url: 'https://api.myjson.com/bins/17pan5',
    json: true
  }, (error, response, body) => {
    if(error){
      status = 'down';
    }else if (body.status === 'OK') {
      status = 'up';
    }
  });
  return status;
};

module.exports = {ping}
