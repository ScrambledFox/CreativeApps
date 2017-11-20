/*
• Create a function sumArray(Input)that sums all the
numbers of the Input array except the highest and the
lowest element (the value, not the index!).
• Test with:
• { 6, 2, 1, 8, 10 } => 16
• { 1, 1, 11, 2, 3 } => 6
*/

var input = [6,8,9,2,3,1,5];

function SumArray (input) {
	if (typeof input[0] == "number") {
		var lowestNumberIndex = input[0];
		var highestNumberIndex = input[0];

		for (var i = 0; i < input.length; i++) {
			if (input[i] < input[lowestNumberIndex]) {
				lowestNumberIndex = i;
			}
			if (input[i] > input[highestNumberIndex]) {
				highestNumberIndex = i;
			}
		}

		var result = 0;
		for (var i = 0; i < input.length; i++) {
			if (i != lowestNumberIndex && i != highestNumberIndex) {
				result += input[i];
			}
		}

		
		return result;

	} else{
		console.log("The input array is not set-up correctly, please check that the array only contains numbers!");
		return null;
	}
}

console.log(SumArray(input));