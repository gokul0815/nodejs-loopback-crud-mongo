'use strict';
var readd = require("../../modules/read/readDatabase.js");

module.exports = function(Read) {
	Read.disableRemoteMethod("find", true);
    Read.disableRemoteMethod("findById", true);
    Read.disableRemoteMethod("update", true);
    Read.disableRemoteMethod("exists", true);
    Read.disableRemoteMethod("upsert", true);
    Read.disableRemoteMethod("count", true);
    Read.disableRemoteMethod("delete", true);
    Read.disableRemoteMethod("deleteById", true);
    Read.disableRemoteMethod("updateAll", true);
    Read.disableRemoteMethod("createChangeStream", true);
    Read.disableRemoteMethod("findOne", true);
    Read.disableRemoteMethod("updateAttributes", false);
    Read.afterRemote("create", function(ctx, result, next) {
    	if (typeof result != 'undefined')
    	{
        	readd.toRead(result);
    	}
    })
};



