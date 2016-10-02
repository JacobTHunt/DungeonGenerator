var getExoticLocation = function() {
	var randInt = getRandomIntInclusive(1, 20);
	
	switch(randInt) {
		case 1:
			return "among the branches of a tree";
			break; // break just in case?
		case 2:
			return "around a geyser";
			break; // break just in case?
		case 3:
			return "behind a waterfall";
			break; // break just in case?
		case 4:
			return "buried in an avalanche ";
			break; // break just in case?
		case 5:
			return "buried in a sandstorm";
			break; // break just in case?
		case 6:
			return "buried in volcanic ash";
			break; // break just in case?
		case 7:
			return "castle or structure sunken in a swamp";
			break; // break just in case?
		case 8:
			return "castle or structure at the bottom of a sinkhole";
			break; // break just in case?
		case 9:
			return "floating on the sea";
			break; // break just in case?
		case 10:
			return "in a meteorite";
			break; // break just in case?
		case 11:
			return "on a demiplane or in a pocket dimension";
			break; // break just in case?
		case 12:
			return "in an area devastated by a magical catastrophe";
			break; // break just in case?
		case 13:
			return "on a cloud";
			break; // break just in case?
		case 14:
			return "in the Feywild";
			break; // break just in case?
		case 15:
			return "in the Shadowfell";
			break; // break just in case?
		case 16:
			return "on an island in an underground sea";
			break; // break just in case?
		case 17:
			return "in a volcano";
			break; // break just in case?
		case 18:
			return "on the back of a Gargantuan living creature";
			break; // break just in case?
		case 19:
			return "sealed inside a magical dome of force ";
			break; // break just in case?
		case 20:
			return "inside a Mordenkainen's magnificent mansion";		
	}
};

var getDungeonLocation = function(randInt) {
	if(randInt < 5) {
		return "a building in a city";
	}
	else if (randInt < 9) {
		return "in catacombs or sewers beneath a city";
	}
	else if (randInt < 13) {
		return "beneath a farmhouse";
	}
	else if (randInt < 17) {
		return "beneath a graveyard";
	}
	else if (randInt < 23) {
		return "beneath a ruined castle";
	}
	else if (randInt < 27) {
		return "beneath a ruined city";
	}
	else if (randInt < 31) {
		return "beneath a temple";
	}
	else if (randInt < 35) {
		return "in a chasm";
	}
	else if (randInt < 39) {
		return "in a cliff face";
	}
	else if (randInt < 43) {
		return "in a desert";
	}
	else if (randInt < 47) {
		return "in a forest";
	}
	else if (randInt < 51) {
		return "in a glacier";
	}
	else if (randInt < 55) {
		return "in a gorge";
	}
	else if (randInt < 59) {
		return "in a jungle";
	}
	else if (randInt < 63) {
		return "in a mountain pass";
	}
	else if (randInt < 67) {
		return "in a swamp";
	}
	else if (randInt < 71) {
		return "beneath or on top of a mesa";
	}
	else if (randInt < 75) {
		return "in sea caves";
	}
	else if (randInt < 79) {
		return "in several connected mesas";
	}
	else if (randInt < 83) {
		return "on a mountain peak";
	}
	else if (randInt < 87) {
		return "on a promontory";
	}
	else if (randInt < 91) {
		return "on an island";
	}
	else if (randInt < 95) {
		return "underwater";
	}
	else {
		return getExoticLocation(randInt);
	}
};