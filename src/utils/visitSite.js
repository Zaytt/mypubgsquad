const axios = require('axios').default;

function visitSite() {
  console.log('self visit...');
  axios
    .get('http://www.mypubgsquad.com/')
    .then(function(response) {
      // handle success
      console.log('success');
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
}

module.exports = visitSite;
