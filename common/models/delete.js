'use strict';
var deletee = require("../../modules/delete/deleteFromDatabase.js");

module.exports = function(Delete) {
	Delete.disableRemoteMethod("find", true);
    Delete.disableRemoteMethod("findById", true);
    Delete.disableRemoteMethod("update", true);
    Delete.disableRemoteMethod("exists", true);
    Delete.disableRemoteMethod("upsert", true);
    Delete.disableRemoteMethod("count", true);
    Delete.disableRemoteMethod("delete", true);
    Delete.disableRemoteMethod("deleteById", true);
    Delete.disableRemoteMethod("updateAll", true);
    Delete.disableRemoteMethod("createChangeStream", true);
    Delete.disableRemoteMethod("findOne", true);
    Delete.disableRemoteMethod("updateAttributes", false);
    Delete.afterRemote("create", function(ctx, result, next) {
    	if (typeof result != 'undefined')
    	{
        	deletee.toDelete(result);
    	}
    })
};



