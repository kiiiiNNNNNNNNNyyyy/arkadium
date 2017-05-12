var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var get_details = function(url) {
	return new Promise(function(resolve, reject) {
		var xhr = new XMLHttpRequest();
		xhr.open('get', url, true);
		xhr.responseType = 'json';
		xhr.onload = function() {
			var status = xhr.status;
			if (status == 200) {
				resolve(this.responseText);
			} else {
				reject(status);
			}
		};
		xhr.send();
	});
};


module.exports.get_details = get_details;