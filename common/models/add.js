'use strict';
var addd = require("../../modules/add/addToDatabase.js");

module.exports = function(Add) {
	Add.disableRemoteMethod("find", true);
    Add.disableRemoteMethod("findById", true);
    Add.disableRemoteMethod("update", true);
    Add.disableRemoteMethod("exists", true);
    Add.disableRemoteMethod("upsert", true);
    Add.disableRemoteMethod("count", true);
    Add.disableRemoteMethod("delete", true);
    Add.disableRemoteMethod("deleteById", true);
    Add.disableRemoteMethod("updateAll", true);
    Add.disableRemoteMethod("createChangeStream", true);
    Add.disableRemoteMethod("findOne", true);
    Add.disableRemoteMethod("updateAttributes", false);
    Add.afterRemote("create", function(ctx, result, next) {
    	if (typeof result != 'undefined')
    	{
        	addd.toAdd(result);
        	next()
    	}
    })
};



