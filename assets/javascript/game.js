// Variables
var win = 0

var loss = 0

var numberToMatch = [];

var counter = 0;

var crystals = ["assets/images/BlueCrystal.jpg",
				"assets/images/GreenCrystal.jpg",
				"assets/images/PurpleCrystal.jpg",
				"assets/images/RedCrystal.jpg"];

var start = false;


// create random number to guess
function createNumberToMatch () {
	numberToMatch = Math.floor(Math.random()* (120 - 19) + 19);
	$("#numberToMatch").append(" " + numberToMatch);
	console.log(numberToMatch);
}

// create crystal random numbers
function createCrystalNumbers () {

		crystalNumbers =[];

		for (var i = 0; i < crystals.length; i++) {

			crystalNumbers.push(Math.floor(Math.random() * (12 - 1) + 1));
			
			var imageCrystal = $('<img>');

			imageCrystal.attr('data-num', crystalNumbers[i]);

			imageCrystal.attr('src', crystals[i]);

			imageCrystal.attr('alt', 'crystals');

			imageCrystal.addClass('crystalImage');

			$('.crystalImage').append(imageCrystal);
			
		}
		console.log(crystalNumbers);
}

function startGame () {

	$("img").on('click', function(){

	if (start == true)
	{
	counter += parseInt($(this).data('num'));
	console.log(numberToMatch);

		$("#yourNumber").text(counter);

		// checking to see if you won/loss
		if (counter == numberToMatch) {
			$("#wonLoss").html("You Won!");
			start = false;
		}

		else if (counter > numberToMatch){
			$("#wonLoss").html("You Lost!");
			start = false;
		}
	}
	});
}

$("#startButton").on('click', function(){
	start = true;
	reset();
});

function reset(){
	counter = 0;
	numberToMatch = 0;
	$("#wonLoss").html("");
	$("#numberToMatch").html("");
	$(".crystalImage").empty();
	createNumberToMatch();
	createCrystalNumbers();
	startGame();
}


