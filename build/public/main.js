var answered = false;

$(document).ready(function() {
	$(".internal").fadeIn();	
	$(".success_hide").hide();
	$(".failure_hide").hide();
});

function ansCheck(year, ans) {
	console.log(year);
	if (answered === false) {
		if (ans === year) {
			$(".outcome").text("Correct!").fadeIn().css("color", "green");
			$(".success_hide").show();
			$(".plyAgain").fadeIn();
			answered = true;
		} else {
			$(".failure_hide").show();
			$(".outcome").text("Incorrect!").fadeIn().css("color", "red");
			$(".corAns").text("Correct Answer: " + ans).fadeIn();
			$(".plyAgain").fadeIn();
			answered = true;
		}
	}
}

function answer_movie_name_check(correct, name){
	console.log("yo");
}

function reload() {
	window.location.reload(true);
}