$(function (){

var $gameScore = 0;
// var level = 0;
var $scoreDigit = $('#score');
var $prog = $('.prog');
var $comprog = $('.comprog');
var $death = $('#levelone');






$('.correct').one('click', function(event){
	$(this).css({
		borderColor: '#010d01',
		backgroundColor:'#4ed453'
	})

	$gameScore = $gameScore + 1;
	displayScore();
});

$('.correct').on('click', function(event){$prog.animate({ width:'+=100px'})
	})









$('.incorrect').one('click', function(event){
	$(this).css({
		borderColor: 'red',
		backgroundColor: '#c12c2c'
	})
	$gameScore = $gameScore - 1;
	displayScore();
});

$('.incorrect').on('click', function(event){$comprog.animate({ width:'+=100px'})
	})


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
	$(this).css({
		borderColor: 'white',
		backgroundColor: 'black',
		color: 'white'
	})
	death();
	dScreenScore();
})





// FUNCTIONS 

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


function death () {
	$('#levelone').fadeOut(2000, function(){
    var div = $("<div id='death-screen'>'</div>").hide(1000000);
    $(this).replaceWith(div);
    $('levelone').fadeIn('slow');
	});
}



function dScreenScore () {
	$('#dscore').html('YOUR FINAL SCORE IS ' + $gameScore + '!');
}



function compAdvance () {

}



// MOVING BACKGROUND

var intval = null;
var pos = 0;

$(document).ready(function() {


    intval = window.setInterval(moveBg, 50);
});

function moveBg() {
    
    pos++;
    
    $(".page").css({backgroundPosition: (pos * -5) + "px 460px"});
}
 





	});