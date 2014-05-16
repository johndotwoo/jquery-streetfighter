$(document).ready(function() {

	var playReady = "";
	
	$('.ryu').mouseenter(function() {
		if (!playReady) {
			$('.ryu-still').hide();
			$('.ryu-ready').show();
		}
	})
	
	$('.ryu').mouseleave(function() {
		if (!playReady) {
			$('.ryu-ready').hide();
			$('.ryu-still').show();
		}
	})
	
	$('.ryu').mousedown(function() {
		if ($('.ryu-cool:visible').length) {
			return
		}

		if (!playReady) {
			playReady = "mousedown";
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
		}
	})
	
	$('.ryu').mouseup(function() {
		if ($('.ryu-cool:visible').length) {
			return
		}
		if (playReady == "mousedown") {
			playReady = "";
			$('.ryu-still').hide();
			$('.ryu-throwing').hide();
			$('.ryu-ready').show();
		}
	})

	$(document).keydown(function(event) {
		if (!$('.ryu-still:visible').length) {
			return
		}

		if (!playReady) {
			playReady = "mousedown";

			if (event.keyCode == 88) {
				$('.ryu-still').hide();
				$('.ryu-ready').hide();
				$('.ryu-throwing').hide();
				$('.ryu-cool').show();	
			}
		}
	})

	$(document).keyup(function(event) {
		if (playReady == "mousedown") {
			playReady = "";

		    if (event.keyCode == 88) {
		    	$('.ryu-cool').hide();
	        	$('.ryu-throwing').hide();
	        	$('.ryu-ready').hide();
	        	$('.ryu-still').show();
	    	}
	    }
    });

});

function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}