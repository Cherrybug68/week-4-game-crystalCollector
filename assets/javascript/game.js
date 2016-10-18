// Variables
var win = 0

var loss = 0

var numberToMatch = [];

var counter = 0;

var crystalNumbers = [];

var crystals = ["assets/images/BlueCrystal.jpg",
				"assets/images/GreenCrystal.jpg",
				"assets/images/PurpleCrystal.jpg",
				"assets/images/RedCrystal.jpg"];



// create random number to guess
function createNumberToMatch () {
	numberToMatch = Math.floor(Math.random()* (120 - 19) + 19);
	$("#numberToMatch").append(" " + numberToMatch);
	console.log(numberToMatch);
}

// create crystal random numbers
function createCrystalNumbers () {

		for (var i = 0; i < crystals.length; i++) {
			// crystalNumbers.push(Math.floor(Math.random() * (12 - 1) + 1));
			
			var imageCrystal = $('<img>');

			imageCrystal.attr('data-num', crystalNumbers[i]);

			imageCrystal.attr('src', crystals[i]);

			imageCrystal.attr('alt', 'crystals');

			imageCrystal.addClass('crystalImage');

			$('#crystals').append(imageCrystal);
			
		}
		// console.log(crystalNumbers);
}

function startGame () {
	counter = 0;
	$('#yourNumber').text(counter);

	function randomIntFromInterval(min,max){
		return Math.floor(Math.random()*(max-min+1)+min);
	}
}

createNumberToMatch();
createCrystalNumbers();


// // checking to see if you won/loss
// if (counter == numberToMatch) {
// 	$("#wonLoss").html = "You Won!"
// }
// else if (counter > numberToMatch){
// 	$("#wonLoss").html = "You Lost!";
// }