/*
• In a small town the population is p0 = 1000 at the beginning of a
year. The population regularly increases by 2 percent per year and
moreover 50 new inhabitants per year come to live in the town. How
many years does the town need to see its population greater or
equal to p = 1200 inhabitants?
• More generally given parameters:
• p0, percent, aug (inhabitants coming or leaving each year), p
(population to surpass)
• the function nb_year should return n number of entire years
needed to get a population greater or equal to p.
• aug is an integer, percent a positive or null number, p0 and p
are positive integers (> 0)

• Tip: create a function nbYear(p0, percent, aug, p)
• Tip: Don't forget to convert the percent parameter as a percentage
in the body of your function: if the parameter percent is 2 you have
to convert it to 0.02.
• Test with:
• nb_year(1500, 5, 100, 5000) -> 15
• nb_year(1500000, 2.5, 10000, 2000000) -> 10
• nbYear(1500000, 0.25, 1000, 2000000) ->94
*/

/*
	Made by A.J. Joris Lodewijks and Jochem de Greef for the Creative Apps course 2017/2018
*/

var p0 = 1500000;
var percent = 2.5;
var aug = 10000;

var p = 2000000;

var year = 1;

function simulateYear (currentPopulation, percent, aug) {
	var factor = percent / 100 + 1;

	var currentPopulation = currentPopulation * factor + aug;

	return currentPopulation;
}

function simulateTownPopulation (p0, percent, aug, p) {
	var currentPopulation = p0;
	while (currentPopulation < p) {
		currentPopulation = simulateYear(currentPopulation, percent, aug);
		year += 1;
	}

	console.log("Duration of the simulation " + (year - 1) + " years");
}

simulateTownPopulation(p0, percent, aug, p);