$(function (){

var $gameScore = 0;
var level = 0;
var $scoreDigit = $('#score');
var $prog = $('.prog');
var $death = $('#board');


$('.correct').one('click', function(event){
	$(this).css({
		borderColor: '#010d01',
		backgroundColor:'#4ed453'
	})

	$gameScore = $gameScore + 1;
	displayScore();
});

$('.correct').click(function(event){ $prog.animate({ width:'+=100px'})
	})




$('.incorrect').one('click', function(event){
	$(this).css({
		borderColor: 'red',
		backgroundColor: '#c12c2c'
	})
	$gameScore = $gameScore - 1;
	displayScore();
});


	// $smallSquare
	// 	.fadeOut(200)
	// 	.delay(50)
	// 	.fadeIn(100)
	// 	.setInterval(50);


$('.neutral').one('click', function(event){
	$(this).css({
		borderColor: '#66480a',
		backgroundColor: '#e9bc80'
	})
})






$('.death').one('click', function(event){
	// $death === .backgroundColor 'red'

	$(this).css({
		borderColor: 'white',
		backgroundColor: 'black',
		color: '#ce9d43'
		// checkDeath();
	})
})








function displayScore () {
	$scoreDigit.html($gameScore);
	$scoreDigit.css({
		backgroundColor: '#4ed453'
	})
}


function checkDeath () {
	clearInterval($death) 

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
 





	});