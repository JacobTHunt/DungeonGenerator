var dungeonLocation, dungeonCreator, dungeonPurpose, dungeonHistory, dungeonExplanation;

var createDungeonLocation = function() {
	var randInt = getRandomIntInclusive(1, 100);
	dungeonLocation = getDungeonLocation(randInt);
	
	console.log(dungeonLocation);
};

var createDungeonCreator = function() {
	var randInt = getRandomIntInclusive(1, 20);
	dungeonCreator = getDungeonCreator(randInt);

	console.log(dungeonCreator);
};

var createDungeonPurpose = function() {
	var randInt = getRandomIntInclusive(1, 20);
	dungeonPurpose = getDungeonPurpose(randInt);
	
	console.log(dungeonPurpose);
};

var createDungeonHistory = function() {
	var randInt = getRandomIntInclusive(1, 20);
	dungeonHistory = getDungeonHistory(randInt);
	dungeonExplanation = getPurposeExplanation(randInt);
	console.log(dungeonHistory);
};

var updateDungeonDescriptionString = function () {
	var dungeonDescriptionString = "Your dungeon was created by " + dungeonCreator + " " + dungeonLocation + "\
									as " + dungeonPurpose + ". It " + dungeonHistory + ".";

	
	$('#dungeonDescriptionDiv').text(dungeonDescriptionString);
};

var createNewDungeon = function() {
	createDungeonCreator();
	createDungeonLocation();	
	createDungeonPurpose();
	createDungeonHistory();
	
	updateDungeonDescriptionString();
}

var updateDungeonCreator = function() {
	createDungeonCreator();
	
	updateDungeonDescriptionString();
}

var updateDungeonLocation = function() {
	createDungeonLocation();
	
	updateDungeonDescriptionString();
}

var updateDungeonPurpose = function() {
	createDungeonPurpose();
	
	updateDungeonDescriptionString();
}

var updateDungeonHistory = function() {
	createDungeonHistory();
	
	updateDungeonDescriptionString();
}
