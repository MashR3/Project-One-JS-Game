$(function (){

// var $alpha = $('.correct');
// var $beta = $('.incorrect');
// var pcount = 0;
// var ccount = 0;
var $gameScore = 0;
var level = 0;
var $scoreDigit = $('#score');

$('.correct').one('click', function(event){
	$(this).css({
		backgroundColor:'#4ed453'
	})
	$gameScore = $gameScore + 1;
	displayScore();
	// pcount++;
	console.log($gameScore);
});



$('.incorrect').one('click', function(event){
	$(this).css({
		backgroundColor: 'red'
	})
	$gameScore = $gameScore - 1;
	displayScore();
	// ccount++;
	console.log($gameScore);
});



function displayScore () {
	$scoreDigit.html($gameScore);
}







// MOVING BACKGROUND

// var intval = null;
// var pos = 0;

// $(document).ready(function() {


//     intval = window.setInterval(moveBg, 50);
// });

// function moveBg() {
    
//     pos++;
    
//     $(".page").css({backgroundPosition: (pos * -5) + "px 460px"});
// }
 //





	});