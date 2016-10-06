var squareSize = 20; // Size of a square in pixels;
var feetPerSquare = 5; // Number of a feet a square represents.

var currentX, currentY;
var c = document.getElementById('dungeonMap');
var dungeonCanvas = c.getContext("2d");

var ChamberEnum = {
    RECT : 1,
    CIRCLE : 2
}

var Chamber = function(chamberType, width, height, startX, startY, numExits) {
	this.chamberType = chamberType; // look in chamber enum
	this.width = width / feetPerSquare * squareSize; // Width given in feet converted to pixels
	this.height = height / feetPerSquare * squareSize; // Height given in feet converted to pixels
	this.startX = startX; // start in pixels
	this.startY = startY; // start in pixels
	this.numExits = numExits; // number of exits the chamber has
	
	var exits = [];
};

var Passage = function(width, length, startX, startY, sidePassage, turnDirection) {
	this.width = width;
	this.length = length;
	this.startX = startX;
	this.startY = startY;
	this.sidePassage = sidePassage;
	this.turnDirection = turnDirection;
};

Chamber.prototype.drawChamber = function() {
	//Find chamber type
	if(this.chamberType == ChamberEnum.RECT) {
		dungeonCanvas.beginPath();
		dungeonCanvas.strokeStyle = "blue"; // line color
		dungeonCanvas.rect(this.startX, this.startY, this.width, this.height);
		dungeonCanvas.fillStyle = "gray";
		dungeonCanvas.fillRect(this.startX, this.startY, this.width,  this.height);
		dungeonCanvas.fill();
		dungeonCanvas.stroke();
	}
	else if(this.chamberType == ChamberEnum.CIRCLE) {
		dungeonCanvas.beginPath();
		dungeonCanvas.strokeStyle = "red"; // line color
		dungeonCanvas.arc(this.startX, this.startY, this.width / 2, 0, 2 * Math.PI, false);
		dungeonCanvas.fillStyle = "gray";
		dungeonCanvas.fill();
		dungeonCanvas.stroke();
	}
}

var drawGrid = function() {
	// Draw grid to canvas
	var opts = {
		distance : squareSize,
		lineWidth : 1,
		gridColor : "#A8A8A8",
		caption : false,
		horizontalLines : true,
		verticalLines : true
	};
	
	new Grid(opts).draw(dungeonCanvas);	
}


var newChamber1 = new Chamber(ChamberEnum.RECT, 40, 40, (c.width / 4), (c.height / 4), 0);
var newChamber2 = new Chamber(ChamberEnum.CIRCLE, 20, 20, 0 + 40, 0 + 40, 0);

newChamber1.drawChamber();
dungeonCanvas.strokeStyle = "red"; // line color
newChamber2.drawChamber();

drawGrid();
