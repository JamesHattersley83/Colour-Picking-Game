 var numSquares = 6;
 var colors = generateRandomColours(numSquares);
 var squares = document.querySelectorAll(".square");
 var colorDisplay = document.querySelector("#picked");
 var displayMessage = document.querySelector("#message");
 var pickedColour = pickColour();
 var h1 = document.querySelector("h1");
 var resetButton = document.querySelector("#reset");
 var easyBtn = document.querySelector("#easyBtn");
 var hardBtn = document.querySelector("#hardBtn");
 

 colorDisplay.textContent = pickedColour;

 easyBtn.addEventListener("click", function() {
 	hardBtn.classList.remove("selected");
 	easyBtn.classList.add("selected");
 	numSquares = 3;
 	colors = generateRandomColours(numSquares);
 	pickedColour = pickColour();
 	colorDisplay.textContent = pickedColour;
 	for(var i = 0; i < squares.length; i++) {
 		if(colors[i]) {
 			squares[i].style.backgroundColor = colors[i];
 		} else {
 			squares[i].style.display = "none";
 		}
 	}
 })

  hardBtn.addEventListener("click", function() {
 	hardBtn.classList.add("selected");
 	easyBtn.classList.remove("selected");
 	numSquares = 6;
 	colors = generateRandomColours(numSquares);
 	pickedColour = pickColour();
 	colorDisplay.textContent = pickedColour;
 	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
 	}	
 })

 resetButton.addEventListener("click", function() {
 	// generate all new colours
 	colors = generateRandomColours(numSquares);
 	// pick new random colour from array
 	pickedColour = pickColour();
 	// change colourDisplay to match picked colour
 	colorDisplay.textContent = pickedColour;
 	this.textContent = "New Colors";
 	displayMessage.textContent = "";
 	for (var i = 0; i < squares.length; i++) {
	// add colour to squares
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
 })


for (var i = 0; i < squares.length; i++) {
	// add colour to squares
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function() {
		// get colour of clicked square
		var clickedColor = this.style.backgroundColor;
		// compare clicked colour to pickedColour
		if (clickedColor === pickedColour) {
			displayMessage.textContent = "Correct";
			resetButton.textContent = "Play Again?";
			changeColours(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "black";
			displayMessage.textContent = "Try again";
		}
	});
}

function changeColours(colour) {
	// loop through squares
	for (var i = 0; i < squares.length; i++) {
		// change all squares to correct colour
		squares[i].style.backgroundColor = colour;
	}
}

function pickColour() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColours(num) {
	// create array
	var arr = [];
	// repeat num times
	for (var i = 0; i < num; i++) {
	// get random number and push into array
	arr.push(randomColour());
	}
	// return array
	return arr;
}

function randomColour() {
	// generate number for red
	var r = Math.floor(Math.random() * 256);
	// generate number for green
	var g = Math.floor(Math.random() * 256);
	// generate number for blue
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}