// Include the Mongoose Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FoodSchema = new Schema({
	brand: {
		type: String
	},
	date: {
		type: String
	},
	item: {
		type: String
	},
	logged: {
		type: Boolean,
		default: false
	},
	sugar: {
		type: Number
	},

	user: {
		type: String,
		default: 'Carol Jenkins'
	}
});

// Create the Model
var Food = mongoose.model('Food', FoodSchema);

// Export it for use elsewhere
module.exports = Food;
