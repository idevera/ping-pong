$(document).ready(function() {
	$("form").submit(function(event) {
		event.preventDefault();
			alert("Hello");
		var number = parseInt($("input#number").val());

		for (i = 1; i <= number; i++) {
			if (i % 3 === 0 && i % 5 === 0) {
				$("ul#result").append("ping pong");
				alert("Hello");
			} else if (i % 3 === 0) {
				$("ul#result").append("ping");
			} else if (i % 5 === 0) {
				$("ul#result").append("pong");
			} else {
				$("ul#result").append(i);
			}
		}

	});
});

