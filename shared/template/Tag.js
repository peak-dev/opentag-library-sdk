//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("PACKAGE_NAME.Tag", {
	config: {
		/*DATA*/
		imageUrl: "https://example.com/img/example-logo.png",
		description: "DESCRIPTION.",
		name: "TAG_NAME",
		async: true,
		isPrivate: false,
		html: "",
		parameters: [
		]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		//write your code here that will be executed after all filters pass
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});
