var mongojs = require('mongojs')
var express = require('express');
var promise = require('promise');
var bodyParser = require('body-parser');
var app = express();
const ejsLint = require('ejs-lint');
var db = mongojs('localhost:27017/banschools', ['banschool']);
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true })); 
var doDeleting = function(custData) {
	return new Promise(function(resolve, reject){
	console.log(custData);
    db.banschool.remove({"School Name": custData.school_name});
    console.log("Successfully deleted from DB");
});
}
module.exports.toDelete = doDeleting;