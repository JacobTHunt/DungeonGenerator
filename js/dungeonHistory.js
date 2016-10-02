var getDungeonHistory = function(randInt) {
	if(randInt < 4) {
		return "was abandoned by its creators";
	}
	else if (randInt < 5) {
		return "was abandoned due to plague";
	}
	else if (randInt < 9) {
		return "was conquered by invaders";
	}
	else if (randInt < 11) {
		return "was destroyed by attacking raiders";
	}
	else if (randInt < 12) {
		return "was destroyed by a discovery made within the site";
	}
	else if (randInt < 13) {
		return "was destroyed by internal conflict";
	}
	else if (randInt < 14) {
		return "was destroyed by magical catastrophe";
	}
	else if (randInt < 16) {
		return "was destroyed by natural disaster";
	}
	else if (randInt < 17) {
		return "was cursed by the gods and shunned";
	}
	else if (randInt < 19) {
		return "is still controlled by its original creator";
	}
	else if (randInt < 20) {
		return "was overrun by planar creatures";
	}
	else if (randInt < 21) {
		return "is the site of a great miracle ";
	}
}