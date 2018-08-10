const rp=require('request-promise');
const config=require('../config/config');
const jsonhelpers=require('./jsonhelpers');

function fetchData(term){
    var options = {
    uri: `https://api.github.com/repositories?q=topic:${term}`,
    qs: {
        access_token: config.gitToken // -> uri + '?access_token=xxxxx%20xxxxx'
    },
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
};

rp(options)
    .then(function (repos) {
        console.log("user has %d repos", repos.length);
        // store the data into JSON file
        jsonhelpers.writeToJSON(repos);
        
    })
    .catch(function (err) {
       console.log(err);
    });
}



module.exports={
    fetchData:fetchData
}