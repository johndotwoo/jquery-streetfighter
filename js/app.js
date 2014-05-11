$(document).ready(function() {
	
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	
	$('.ryu').mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	
	$('.ryu').mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show() 
		.animate(
			{'left': '300px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '-212px');
			}
		);
	})
	
	$('.ryu').mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	})

	$(document).keydown(function(event) {
		if (event.keyCode == 88) {
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide();
			$('.ryu-cool').show();	
		}
	})

	$(document).keyup(function(event) {
	    $('.ryu-cool').hide();
        $('.ryu-ready').hide();
        $('.ryu-throwing').hide();
        $('.ryu-still').show();
    });

});

function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}