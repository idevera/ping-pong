$(document).ready(function() {
	$("form").submit(function(event) {

		var number = parseInt($("input#number").val());

		for (i = 1; i <= number; i++) {
			if (i % 3 === 0) {
				$("ul#result").append("ping");
			} else if (i % 5 === 0) {
				$("ul#result").append("pong");
			} else if (i % 15 === 0)
				$("ul#result").append("pingpong");
			} else {

			}
		}

		event.preventDefault();
	});
});

