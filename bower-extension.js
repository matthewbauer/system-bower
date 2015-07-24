"format cjs";

var utils = require("./npm-utils");
exports.includeInBuild = true;

exports.addExtension = function(System){
	var oldNormalize = System.normalize;
	System.normalize = function(name, parentName, parentAddress){
		if (utils.path.isRelative(name) && this.paths[parentName]) {
			return oldNormalize.call(this, name, this.paths[parentName], parentAddress);
		}
		return oldNormalize.call(this, name, parentName, parentAddress);
	};
};
