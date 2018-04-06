var mongojs = require('mongojs')
var express = require('express');
var bodyParser = require('body-parser');
var promise = require('promise');
var app = express();
const ejsLint = require('ejs-lint');
var db = mongojs('localhost:27017/banschools', ['banschool']);
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true })); 
var doReading = function(custData) {
	return new Promise(function(resolve, reject){
	console.log(custData);
    db.banschool.find({"School Name" : custData.School_name}).toArray(function(err, results){
	    if (err) {
	        throw err;
	    } else {
	        console.log("Found in DB");
	        console.log(results);
	    }
	});
});
}
module.exports.toRead = doReading;