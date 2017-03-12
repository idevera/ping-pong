$(document).ready(function() {
	$("form").submit(function(event) {

		var number = parseInt($("input#number").val());

		for (i = 1; i <= number; i++) {
			$("#result").append(i);
		}

		event.preventDefault();
	});
});

