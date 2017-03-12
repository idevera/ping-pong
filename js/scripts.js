$(document).ready(function() {
	$("form").submit(function(event) {

		var number = parseInt($("input#number").val());

		for (i = 1; i <= number; i++) {
			if (i % 3 === 0) {
				$("ul#result").append(i);
			} else {
				alert("Hello");
			}
		}
		event.preventDefault();
	});
});

