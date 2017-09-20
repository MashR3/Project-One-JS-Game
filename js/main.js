$(function (){

	var introScreen = $('#instcont').show();
	var endScreen = $('#death-screen').hide();
	var winScreen = $('#win-screen').hide();
	var oneScreen = $('#levelone').hide();
	var twoScreen = $('#leveltwo').hide();
	var threeScreen = $('#levelthree').hide();

	// var totalScore = $('#yourscore');
	var $oneScore = 0;
	var $scoreDigit = $('#score');
	var $prog = $('.prog');
	var $comprog = $('.comprog');

	var redcount = 1;
	var redcount2 = 1;
	var redcount3 = 1;
	var greencount = 0;
	var greencount2 = 0;
	var greencount3 =0;

	var lOneArray = [
		'Zodiac: 2',
		'Time: 2',
		'Bone: 2',
		'Note: 2',
		'Lantern: 2',
		'Worm: 2',
		'Build: 2',
		'Carry: 2',
		'Tricks: 2',
		'Wooden: 3'
	];

	var lTwoArray = [
		'Wolf: 2',
		'Mint: 2',
		'Electric: 2',
		'Pop: 2',
		'Blow: 4',
		'Harpoon: 2',
		'Ear: 2',
		'Ocean: 2',
		'Puppy: 2'
	];

	var lThreeArray = [
		'Finger: 3',
		'Dictionary: 2',
		'Study: 2',
		'Cross: 2',
		'Fast: 2',
		'Strike',
		'Roll: 2',
		'Fall: 2',
		'Taste: 2'
	]

	clueChoose();





// ----------------------------------------------------------------------------------------------------
$('.correct').one('click', function(event){
	$(this).css({
		borderColor: '#010d01',
		backgroundColor:'#4ed453'
	})

	$oneScore = $oneScore + 1;
	displayScore();
});

$('.correct').one('click', function(event){
	$prog.animate({ width:'+=100px'})
	greencount ++;
	checkBar();
})
// -------------------------------------------------------------------------------------------------------------------
$('.incorrect').one('click', function(event){
	$(this).css({
		borderColor: 'red',
		backgroundColor: '#c12c2c'
	})

	$oneScore = $oneScore - 1;
	displayScore();
	$(this).removeClass('incorrect');

	setTimeout(compAdvance, 1000);
	clueChoose();
});

$('.incorrect').one('click', function(event){
	$comprog.animate({ width:'+=100px'})
	redcount += 2;
	checkBar();	
})
// -----------------------------------------------------------------------------------------------------------------
$('.neutral').one('click', function(event){
	$(this).css({
		borderColor: '#66480a',
		backgroundColor: '#e9bc80'
	})
	redcount ++;
	setTimeout(compAdvance, 1000);
	clueChoose();
	checkBar();
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
	redcount ++;
	clueChoose();
})
// ---------------------------------------------------------------------------------------------------------------
$('#restart').on('click', function(event){
	restart();
})
// ---------------------------------------------------------------------------------------------------------------
$('#startgame').on('click', function(){
	var introScreen = $('#instcont').hide();
	var oneScreen = $('#levelone').show();
	var endScreen = $('#death-screen').hide();
	var twoScreen = $('#leveltwo').hide();

})
// ---------------------------------------------------------------------------------------------------------------
$('#clear').on('click', function(){
	restart();
})
//----------------------------------------------------------------------------------------------------------------
$('#playagain').on('click', function(){
	restart();
})
// ---------------------------------------- FUNCTIONS FUNCTIONS FUNCTIONS ----------------------------------------
function displayScore () {
	$scoreDigit.html($oneScore);

	if ((parseInt($oneScore)) > 0) {
		$scoreDigit.css({
			backgroundColor: '#4ed453'
		})

	} else if ((parseInt($oneScore)) < 0) {
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
	    var introScreen = $('#instcont').hide();
	    var oneScreen = $('#levelone').hide();
		var endScreen = $('#death-screen').show();
		var winScreen = $('#win-screen').hide();
		var twoScreen = $('#leveltwo').hide();
		var threeScreen = $('#levelthree').hide();


	});
}
// -------------------------------------------------------------------------------------------------------------
function dScreenScore () {
	$('#dscore').html('YOUR FINAL SCORE IS:    ' + $oneScore + '!');
}
// -------------------------------------------------------------------------------------------------------------
function clueChoose () {
	var randClue = Math.floor(Math.random()*lOneArray.length);
	var returnClue = lOneArray[randClue];

	lOneArray.splice(randClue, 1);
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
}
// ----------------------------------------------------------------------------------------------------------------
function checkBar () {
	if (greencount === 9) {
		levOneWin();
		yourScore();
	} else if (redcount >= 9) {
		death();
		dScreenScore();
	}
}
// ----------------------------------------------------------------------------------------------------------------
function levOneWin () {
	$('#levelone').fadeOut(1500, function(){
	    var introScreen = $('#instcont').hide();
	    var oneScreen = $('#levelone').hide();
		var endScreen = $('#death-screen').hide();
		var winScreen = $('#win-screen').hide();
		var twoScreen = $('#leveltwo').show();
		var threeScreen = $('#levelthree').hide();

		var redcount = 1;
		var greencount = 0;

	});
}
// -----------------------------------------------------------------------------------------------------------------
function restart() {
	var introScreen = $('#instcont').show();
	var oneScreen = $('#levelone').hide();
	var endScreen = $('#death-screen').hide();
	var twoScreen = $('#leveltwo').hide();
	var threeScreen = $('#levelthree').hide();


	location.reload();
}
//------------------------------------------------------------------------------------------------------------------
function yourScore () {
	$('#yourscore').html('YOUR FINAL SCORE IS:   ' + $oneScore + '!');
}

// ------------------------------------------------------------------------------------------------------------------
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ALL THE LEVEL TWO!!!!!




// function goToLevelTwo () {

// }

// MOVING BACKGROUND -----------------------------------------------------------------------------------------------

// var intval = null;
// var pos = 0;

// $(document).ready(function() {


//     intval = window.setInterval(moveBg, 10);
// });

// function moveBg() {
    
//     pos++;
    
//     $(".page").css({backgroundPosition: (pos * -5) + "px 460px"});
// }

});