import axios from 'axios';

const BASEURL = 'https://api.nutritionix.com/v1_1/search/';
const APIKEY = 'fe74b393&appKey=0f67585942dbe5bba69114590757adf7';

const API = {
	search: function(query) {
		return axios.get(BASEURL + query + APIKEY);
	},
	// searchLastUser: function() {return axios.get('/api/saved');},

	getSaved: function() {
		return axios.get('/api/saved').then(function(results) {
			console.log('axios results', results);
			return results;
		});
	},
	postSaved: function(user, item_name, brand_name, nf_sugars, date, logged) {
		console.log('Posting');
		var newFood = { user: user, item: item_name, brand: brand_name, sugar: nf_sugars, date: date, logged: true };
		console.log(newFood);

		return axios
			.post('/api/saved', newFood)
			.then(function(response) {
				console.log('axios results food', response.data);
				alert('hitting post route with ' + response.data);
				return response.data;
			})
			.catch(function(error) {
				console.log(error);
			});
	}
};

export default API;
