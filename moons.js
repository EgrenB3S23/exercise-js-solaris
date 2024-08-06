function addMoons() {
	const storedData = JSON.parse(localStorage.getItem("bodies"));
	let planets = document.getElementsByClassName("planet");

	storedData.forEach((celestial) => {
		let planet = document.getElementById(celestial.name);

		for (let i = 0; i < celestial.moons.length; i++) {
			let newMoon = document.createElement("div");
			newMoon.classList.add("moon");
			newMoon.id = celestial.moons[i].toLowerCase();
			planet.appendChild(newMoon);
		}
	});
}

function logMoons() {
	//printes all moons to console.
	console.log("logging all moons...");

	const storedData = JSON.parse(localStorage.getItem("bodies"));
	planets = document.getElementsByClassName("planet");

	storedData.forEach((body) => {
		planet = document.getElementById(body.name);

		for (let i = 0; i < body.moons.length; i++) {
			console.log(body.moons[i]);
		}
	});
}

// logMoons();
addMoons();

/*

		let newItem = document.createElement("div"); // Skapa en ny div för planeten
		newItem.classList.add("planet");
		newItem.id = body.name.toLowerCase();

*/
