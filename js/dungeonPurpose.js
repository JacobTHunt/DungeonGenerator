var getDungeonPurpose = function(randInt) {
	if(randInt < 2) {
		return "a death trap";
	}
	else if(randInt < 6) {
		return "a lair";
	}
	else if(randInt < 7) {
		return "a maze";
	}
	else if(randInt < 10) {
		return "a mine";
	}
	else if(randInt < 11) {
		return "a planar gate";
	}
	else if(randInt < 15) {
		return "a stronghold";
	}
	else if(randInt < 18) {
		return "a temple or shrine";
	}
	else if(randInt < 20) {
		return "a tomb";
	}
	else if(randInt < 21) {
		return "a treasure vault";
	}
}

var getPurposeExplanation = function(randInt) {
		if(randInt < 2) {
		return " This dungeon is built to eliminate any creature that dares to enter it. \
				A death trap might guard the treasure of an insane wizard, or it might be \
				designed o lure adventurers to their demise for some nefarious purpose, \
				such as to feed souls to a lich's phylactery. ";
	}
	else if(randInt < 6) {
		return "A lair is a place where monsters live. Typical airs include ruins and caves.";
	}
	else if(randInt < 7) {
		return "A maze is intended to deceive oi- confuse those who enter it. Some mazes are \
				elaborate obstacles that protect treasure, while others are gauntlets for prisoners \
				banished there to be hunted and devoured by the monsters within.";
	}
	else if(randInt < 10) {
		return "An abandoned mine can quickly become infested with monsters, while miners who delve too \
				deep can break through into the Underdark.";
	}
	else if(randInt < 11) {
		return "Dungeons built around planar portals are often transformed by the planar energy seeping out through those portals. ";
	}
	else if(randInt < 15) {
		return "A stronghold dungeon provides a secure base of operations for villains and monsters. It is usually ruled by a powerful \
				individual, such as a wizard, vampire, or dragon, and it is larger and more complex than a simple lair. ";
	}
	else if(randInt < 18) {
		return "This dungeon is consecrated to a deity or other planar entity. The entity's worshipers control the dungeon and conduct their rites there";
	}
	else if(randInt < 20) {
		return "Tombs are magnets for treasure hunters, as well as monsters that hunger for the bones of the dead.";
	}
	else if(randInt < 21) {
		return "Built to protect powerful magic items and great material wealth, treasure vault dungeons are : eavily guarded by monsters and traps.";
	}
}