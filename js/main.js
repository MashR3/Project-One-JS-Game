$(function (){

var introScreen = $('#instcont').show();
var endScreen = $('#death-screen').hide();
var oneScreen = $('#levelone').hide();

var $gameScore = 0;
// var level = 0;
var $scoreDigit = $('#score');
var $prog = $('.prog');
var $comprog = $('.comprog');
var $death = $('#levelone');

var lOneArray = [
	'Zodiac: 2',
	'Time: 2',
	'Bone: 2',
	'Note: 2',
	'Lantern: 2',
	'Worm: 2',
	'Build: 2',
	'Carry: 2',
	'Wooden: 3'
];


clueChoose();

// $('#clue').html(startingClue);

$('.correct').one('click', function(event){
	$(this).css({
		borderColor: '#010d01',
		backgroundColor:'#4ed453'
	})

	$gameScore = $gameScore + 1;
	displayScore();
});

$('.correct').one('click', function(event){
	$prog.animate({ width:'+=100px'})
})
// -------------------------------------------------------------------------------------------------------------------

$('.incorrect').one('click', function(event){
	$(this).css({
		borderColor: 'red',
		backgroundColor: '#c12c2c'
	})
	$gameScore = $gameScore - 1;
	displayScore();
	$(this).removeClass('incorrect');

	setTimeout(compAdvance, 1000);
	clueChoose();
});

$('.incorrect').one('click', function(event){
	$comprog.animate({ width:'+=100px'})
	
})
// -----------------------------------------------------------------------------------------------------------------

$('.neutral').one('click', function(event){
	$(this).css({
		borderColor: '#66480a',
		backgroundColor: '#e9bc80'
	})

	setTimeout(compAdvance, 1000);
	clueChoose();
})
// -------------------------------------------------------------------------------------------------------------

$('.death').one('click', function(event){
	$(this).css({
		borderColor: 'white',
		backgroundColor: 'black',
		color: 'white'
	})
	death();
	dScreenScore();
})
// ---------------------------------------------------------------------------------------------------------------

$('#endturn').on('click', function(event){
	compAdvance();
	clueChoose();
})
// ---------------------------------------------------------------------------------------------------------------

$('#restart').on('click', function(event){
	var introScreen = $('#instcont').show();
	var oneScreen = $('#levelone').hide();
	var endScreen = $('#death-screen').hide();
})
// ---------------------------------------------------------------------------------------------------------------

$('#startgame').on('click', function(){
	var introScreen = $('#instcont').hide();
	var oneScreen = $('#levelone').show();
	var endScreen = $('#death-screen').hide();
})
// ---------------------------------------- FUNCTIONS FUNCTIONS FUNCTIONS ----------------------------------------

function displayScore () {
	$scoreDigit.html($gameScore);

	if ((parseInt($gameScore)) > 0) {
		$scoreDigit.css({
			backgroundColor: '#4ed453'
		})

	} else if ((parseInt($gameScore)) < 0) {
		$scoreDigit.css({
			backgroundColor: 'red'
		})

	} else {
		$scoreDigit.css({
			backgroundColor: 'antiquewhite'
		})
	}
}
// ------------------------------------------------------------------------------------------------------------
function death () {
	$('#levelone').fadeOut(2000, function(){
	    // var div = $("<div id='death-screen'>'</div>").hide(1000000);
	    var introScreen = $('#instcont').hide();
	    var oneScreen = $('#levelone').hide();
		var endScreen = $('#death-screen').show();
	    // $(this).replaceWith(div);
	    // $('levelone').fadeIn('slow');
	});
}
// -------------------------------------------------------------------------------------------------------------
function dScreenScore () {
	$('#dscore').html('YOUR FINAL SCORE IS:    ' + $gameScore + '!');
}
// -------------------------------------------------------------------------------------------------------------
function clueChoose () {
	var randClue = Math.floor(Math.random()*lOneArray.length);
	var returnClue = lOneArray[randClue];
	lOneArray.splice(randClue, 1);
	// console.log(returnClue);
	// debugger
	$('#clue').html(returnClue);
	return returnClue
}
// --------------------------------------------------------------------------------------------------------------
function compAdvance () {
	var $ele = $('.incorrect');

	var $rbox = Math.floor(Math.random()*($ele.length - 1));
	$comprog.animate({ width:'+=100px'});

	$ele.eq($rbox).css({
		borderColor: 'red',
		backgroundColor: '#c12c2c'
	})

	$ele.eq($rbox).removeClass('incorrect');
	console.log('index chosen: ' + $rbox);
	console.log($ele);
}
// ----------------------------------------------------------------------------------------------------------------
// function () {

// }




// MOVING BACKGROUND -------------------------------------------------------------------------------------------------

// var intval = null;
// var pos = 0;

// $(document).ready(function() {


//     intval = window.setInterval(moveBg, 20);
// });

// function moveBg() {
    
//     pos++;
    
//     $(".page").css({backgroundPosition: (pos * -5) + "px 460px"});
// }
 


});