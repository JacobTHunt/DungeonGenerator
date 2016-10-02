var randomCultCreator = function() {
	var randInt = getRandomIntInclusive(1, 20);
	
	if(randInt < 2) {
		return "a demon-worshiping cult";
	}
	else if(randInt < 3) {
		return "a devil-worshiping cult";
	}
	else if(randInt < 5) {
		return "an elemental Air cult ";
	}
	else if(randInt < 7) {
		return "an elemental Earth cult ";
	}
	else if(randInt < 9) {
		return "an elemental Fire cult";
	}
	else if(randInt < 11) {
		return "an elemental Water cult";
	}
	else if(randInt < 16) {
		return "worshipers of an evil deity";
	}
	else if(randInt < 18) {
		return "worshipers of a good deity ";
	}
	else {
		return "worshipers of a neutral deity ";
	}
}

var getRandomAlignment = function() {
	var randInt = getRandomIntInclusive(1, 20);
	
	if(randInt < 3) {
		return "Lawful Good";
	}
	else if(randInt < 5) {
		return "Neutral Good";
	}
	else if(randInt < 7) {
		return "Chaotic Good";
	}
	else if(randInt < 10) {
		return "Lawful Neutral";
	}
	else if(randInt < 12) {
		return "Neutral";
	}
	else if(randInt < 13) {
		return "Chaotic Neutral";
	}
	else if(randInt < 16) {
		return "Lawful Evil";
	}
	else if(randInt < 19) {
		return "Neutral Evil";
	}
	else {
		return "Chaotic Evil";
	}	
}

var getRandomAlignment = function () {
	var randInt = getRandomIntInclusive(1, 20);
	
	if(randInt < 2) {
		return "Barbarian";
	}
	else if(randInt < 3) {
		return "Bard";
	}
	else if(randInt < 5) {
		return "Cleric";
	}
	else if(randInt < 6) {
		return "Druid";
	}
	else if(randInt < 8) {
		return "Fighter";
	}
	else if(randInt < 9) {
		return "Monk";
	}
	else if(randInt < 10) {
		return "Paladin";
	}
	else if(randInt < 11) {
		return "Ranger";
	}
	else if(randInt < 15) {
		return "Rogue";
	}
	else if(randInt < 16) {
		return "Sorcerer";
	}
	else if(randInt < 17) {
		return "Warlock";
	}
	else {
		return "Wizard";
	}
}

var randomHumanCreator = function() {
	var npcAlignment = getRandomAlignment();
	var npcClass = getRandomClass();
	
	return "a " + npcAlignment + " " + npcClass;
}

var getDungeonCreator = function(randInt) {
	if(randInt < 2) {
		return "a Beholder";
	}
	else if(randInt < 5) {
		return randomCultCreator();
	}
	else if(randInt < 9) {
		return "Dwarves";
	}
	else if(randInt < 10) {
		//
		return "Elves (including drow)";
	}
	else if(randInt < 11) {
		return "Giants";
	}
	else if(randInt < 12) {
		return "Hobgoblins";
	}
	else if(randInt < 16) {
		//Humans
		return randomHumanCreator;
	}
	else if(randInt < 17) {
		return "Kuo-toa";
	}
	else if(randInt < 18) {
		return "a Lich";
	}
	else if(randInt < 19) {
		return "Mindflayers";
	}
	else if(randInt < 20) {
		return "Yuan-ti";
	}
	else if(randInt < 21) {
		return "No creator (natural caverns)";
	}
}