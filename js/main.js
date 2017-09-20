$(function (){

	var introScreen = $('#instcont').show();
	var endScreen = $('#death-screen').hide();
	var winScreen = $('#win-screen').hide();
	var oneScreen = $('#levelone').hide();
	var twoScreen = $('#leveltwo').hide();
	var threeScreen = $('#levelthree').hide();
	var $oneScore = 0;
	var $scoreDigit = $('.score');
	var $prog = $('.prog');
	var $comprog = $('.comprog');
	var redcount = 1;
	var greencount = 0;
	var currentLevel = 1;

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
	console.log($comprog.width())

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

	$('.death').one('click').addClass('fadeOut');

	if (currentLevel === 1) {
			death('#levelone');

		} else if (currentLevel === 2) {
			death('#leveltwo');

		} else if (currentLevel ===3) {
			death('#levelthree');
		}

	dScreenScore();
})
// ---------------------------------------------------------------------------------------------------------------
$('.endturn').on('click', function(event){
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
$('.clear').on('click', function(){
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
function death (lev) {
	$(lev).fadeOut(2000, function(){
		$('#death-screen').show();
	});
}
// -------------------------------------------------------------------------------------------------------------
function dScreenScore () {
	$('#dscore').html('YOUR FINAL SCORE IS:    ' + $oneScore + '!');
}
// -------------------------------------------------------------------------------------------------------------
function clueChoose () {
	if (currentLevel === 1) {
			var randClue = Math.floor(Math.random()*lOneArray.length);
			var returnClue = lOneArray[randClue];
			lOneArray.splice(randClue, 1);

		} else if (currentLevel === 2) {
			var randClue = Math.floor(Math.random()*lTwoArray.length);
			var returnClue = lTwoArray[randClue];
			lTwoArray.splice(randClue, 1);
			

		} else if (currentLevel ===3) {
			var randClue = Math.floor(Math.random()*lThreeArray.length);
			var returnClue = lThreeArray[randClue];
			lThreeArray.splice(randClue, 1);
		}

	$('.clue').html(returnClue);
	return returnClue
}
// --------------------------------------------------------------------------------------------------------------
function compAdvance () {
	if (currentLevel === 1) {
		var $ele = $('#levelone .incorrect');
	} else if (currentLevel === 2) {
		var $ele = $('#leveltwo .incorrect');
	} else if (currentLevel ===3) {
		var $ele = $('#levelthree .incorrect')
	}

	var $rbox = Math.floor(Math.random()*($ele.length - 1));
	
	if ($comprog.width() < 900) {
		$comprog.animate({ width:'+=100px'});

		$ele.eq($rbox).css({
			borderColor: 'red',
			backgroundColor: '#c12c2c'
		})

		$ele.eq($rbox).off('click');
	}
	
	$ele.eq($rbox).removeClass('incorrect');

}
// ----------------------------------------------------------------------------------------------------------------
function checkBar () {
	if (greencount === 9) {
		if (currentLevel === 1) {
			levelWin('#levelone', '#leveltwo');

		} else if (currentLevel === 2) {
			levelWin('#leveltwo', '#levelthree');

		} else if (currentLevel ===3) {
			levelWin('#levelthree', '#win-screen');
		}

		yourScore();

	} else if (redcount >= 9) {

		if (currentLevel === 1) {
			death('#levelone');

		} else if (currentLevel === 2) {
			death('#leveltwo');

		} else if (currentLevel ===3) {
			death('#levelthree');
		}

		dScreenScore();
	}
}
// ----------------------------------------------------------------------------------------------------------------
function levelWin (hide, show) {
	$(hide).fadeOut(1500, function () {
		$('#instcont').hide();
		$('#win-screen').hide();
		$(show).show();
		$prog.animate({ width:'0px'})
		currentLevel ++;
		clueChoose();
		redcount = 1;
		greencount = 0;
	})
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

// ANIMATIONS -----------------------------------------------------------------------------------------------

var intval = null;
var pos = 0;

$(document).ready(function() {
    intval = window.setInterval(moveBg, 10);
});

function moveBg() {
    pos++;
    $(".page").css({backgroundPosition: (pos * -5) + "px 460px"});
}


$(".button1").hover(
  function () {
    $(this).addClass('animated shake');
  }, 
  function () {
    $(this).removeClass('animated shake');
  }
  );

});