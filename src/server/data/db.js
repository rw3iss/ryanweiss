var play = require('./play/play.json');
var freelance = require('./work/freelance.json');
var fulltime = require('./work/fulltime.json');
var skills = require('./skills/skills.json');

// "Flat file" database (ie. JSON manager)
function db() {
	this.init = function() {
	}

	this.getItem = function(key) {
		for (item of freelance.items) {
			if(item.key == key) {
				return item;
			}
		}

		for (item of play.items) {
			if(item.key == key) {
				return item;
			}
		}

		for (item of fulltime.items) {
			if(item.key == key) {
				return item;
			}
		}
	}

	// concatenates all json and sorts items by date
	this.getLatest = function() {
		var items = _combineItems(freelance, play);
		//items = _combineItems(items, play);

		// truncate to most recent 12 items
		items = items.slice(0, 12); 

		//items = _sortItems(items, 'date_updated');

		return items;
	}

	this.getFreelance = function(sortBy) {
		return freelance.items;
	}

	this.getFulltime = function(sortBy) {
		return fulltime.items;
	}

	this.getPlay = function(sortBy) {
		return play.items;
	}

	this.getSkills = function() {
		return skills;
	}

	this.search = function(string) {
		return null;
	}
}


// Helper functions

function _sortItems(items, sortBy) {
	// returns a sorted array of items
	items.sort(function(a,b) {

	});

	return items;
}

// Combines items into a single array, but adds a 'category' property to the 
// items based on their parent category (ie. work or play)
// Todo: take an arbitrary number of cat arguments and combine them
function _combineItems(catA, catB) {
	var result = [];

	for (var i = 0; i < catA.items.length; i++) {
		var item = catA.items[i];
		item.category = catA.category;
		result.push(item);
	}

	for (var i = 0; i < catB.items.length; i++) {
		var item = catB.items[i];
		item.category = catB.category;
		result.push(item);
	}

	return result;
}


module.exports = new db();