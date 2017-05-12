var request = require('request');
var api_key = 'b63f3b60776f510d0be5712e50e1cd35';

var get_all_movies = (id, callback) => {
	request({
		url: `http://api.themoviedb.org/3/discover/movie?api_key=`${api_key}`&with_cast=${id}`,,
		json: true,
	}, (error, response, body) => {
		if(error){
			console.log("Unable ot connect to the setver");
		}else if(response.statusCode === 400){
			console.log("Unable to fetch data from the API");
		}else if(response.statusCode === 200){
			callback(undefined, {
				body: body
			});
		}
	});
}