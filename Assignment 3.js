/*
• Given a number as a parameter, return an array
containing strings which form a box.
• Test with n=5:
• Test with n=3:
*/

var n = 5;

function drawTopBottomLines (n) {
	var string = "";
	for (var i = 0; i < n; i++) {
		string += '-';
	}

	return string;
}

function drawInsideLines (n) {
	var string = "";
	for (var i = 0; i < n; i++) {
		if (i == 0 || i == (n-1)) {
			string += "-";
		} else{
			string += " ";
		}
	}

	return string;
}

function drawBox (n) {
	var boxArray = []; // ("---", "- -", "---") n = 3
	for(var i = 0; i < n; i++ ){
		if (i == 0 || i == (n-1)) {
			boxArray[i] = drawTopBottomLines(n);
		} else{
			boxArray[i] = drawInsideLines(n);
		}
	}

	for (var i = 0; i < n; i++) {
		console.log(boxArray[i]);
	}
}


drawBox(n);