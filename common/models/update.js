
'use strict';
var updatee = require("../../modules/update/updateDatabase.js");

module.exports = function(Update) {
	Update.disableRemoteMethod("find", true);
    Update.disableRemoteMethod("findById", true);
    Update.disableRemoteMethod("update", true);
    Update.disableRemoteMethod("exists", true);
    Update.disableRemoteMethod("upsert", true);
    Update.disableRemoteMethod("count", true);
    Update.disableRemoteMethod("delete", true);
    Update.disableRemoteMethod("deleteById", true);
    Update.disableRemoteMethod("updateAll", true);
    Update.disableRemoteMethod("createChangeStream", true);
    Update.disableRemoteMethod("findOne", true);
    Update.disableRemoteMethod("updateAttributes", false);
    Update.afterRemote("create", function(ctx, result, next) {
    	if (typeof result != 'undefined')
    	{
        	updatee.toUpdate(result);
    	}
    })
};



