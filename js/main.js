$(function (){

var $alpha = $('#alpha');
var $beta = $('#beta');
var pcount = 0;
var ccount = 0;

$('#alpha').one('click', function(event){
	$(this).css({
		backgroundColor:'#2bce2b'
	})
	pcount++;
	console.log("I have been clicked!");
});



$('#beta').one('click', function(event){
	$(this).css({
		backgroundColor: 'red'
	})
	ccount++;
	console.log("I have been clicked!");
});






function pProgress () {
	var $prog = $('#prog')
	var counter = 5;
	var track = 25;
	var id = setInterval(frame, 50);


	function frame () {
		if (track === 750 && counter === 100) {
			clearInterval(id);

		} else {
			track += 5;
			counter += 1;
			$prog.style.width = track + 'px';
		}
	}
}


pProgress();








	});