$(function (){

var $alpha = $('.correct');
var $beta = $('.incorrect');
// var pcount = 0;
// var ccount = 0;
var $gameScore = 0;
var level = 0;
var $scoreDigit = $('#score');

$('.correct').one('click', function(event){
	$(this).css({
		backgroundColor:'#2bce2b'
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






var intval = null;
var pos = 0;

$(document).ready(function() {


    intval = window.setInterval(moveBg, 50);
});

function moveBg() {
    
    pos++;
    
    $(".page").css({backgroundPosition: (pos * -5) + "px 460px"});
}


// var $mainHeading = $('#main-heading');

// $mainHeading.html('I\'M SO NEW YOU CAN\'T HANDLE ME!!!');


// function pProgress () {
// 	var $prog = $('#prog')
// 	var counter = 5;
// 	var track = 25;
// 	var id = setInterval(frame, 50);


// 	function frame () {
// 		if (track === 750 && counter === 100) {
// 			clearInterval(id);

// 		} else {
// 			track += 5;
// 			counter += 1;
// 			$prog.style.width = track + 'px';
// 		}
// 	}
// }


// pProgress();

            
function run () {           
    $(".page").animate({ left: "+=100px" }, 2000);
    $(".page").animate({ left: "-=100px" }, 2000, run); // call run again
}

run();             




	});