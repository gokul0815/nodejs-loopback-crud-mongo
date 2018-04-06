var mongojs = require('mongojs')
var express = require('express');
var promise = require('promise');
var bodyParser = require('body-parser');
var app = express();
const ejsLint = require('ejs-lint');
var db = mongojs('localhost:27017/banschools', ['banschool']);
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true })); 
var doUpdating = function(custData) {
	return new Promise(function(resolve, reject){
	console.log(custData);
    db.banschool.update(
		{ 
			"School Name" : custData.school_name },
	    {
	    	"Pincode" : custData.Pincode,
	    	"DDPI Email" : custData.DDPI_email,
	    	"Management" : custData.management,
	    }
	);
});
}
module.exports.toUpdate = doUpdating;


