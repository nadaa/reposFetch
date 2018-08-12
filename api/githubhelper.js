const rp=require('request-promise');
const config=require('../config/config');
const jsonhelpers=require('./jsonhelper');

function fetchData(term,cb){
    var options = {
    uri: `https://api.github.com/search/repositories?q=${term}`,
    qs: {
        access_token: config.gitToken 
    },
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true 
};

rp(options)
    .then(function (repos) {
        cb(repos.items);
       // jsonhelpers.writeToJSON(repos.items);
    })
    .catch(function (err) {
       console.log(err);
    });
}

module.exports={
    fetchData:fetchData
}