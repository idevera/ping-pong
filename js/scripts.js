$(document).ready(function() {
	$("form").submit(function(event) {
		event.preventDefault();
			
		$("ul#result").children("li").remove();
		
		var number = parseInt($("input#number").val());

		for (i = 1; i <= number; i++) {
			if (i % 3 === 0 && i % 5 === 0) {
				$("ul#result").append("<li>ping pong</li>");
			} else if (i % 3 === 0) {
				$("ul#result").append("<li>ping</li>");
			} else if (i % 5 === 0) {
				$("ul#result").append("<li>pong</li>");
			} else {
				$("ul#result").append("<li>" + i + "</li>");
			}
		}
		
	});
});

