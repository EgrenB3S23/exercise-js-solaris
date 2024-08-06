const apiUrl = "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/";

// POST-anrop till API för att hämta en API-nyckel. Nyckeln loggas till konsolen och returneras.
async function fetchApiKey() {
	let resp = await fetch(`${apiUrl}keys`, {
		method: "POST",
	});
	let data = await resp.json();
	console.log("API Key:", data.key); // Logga API-nyckeln
	return data.key;
}

// Gör ett GET-anrop till API för att hämta data om solsystemets kroppar med hjälp av API-nyckeln
async function getData(apiKey) {
	let response = await fetch(`${apiUrl}bodies`, {
		method: "GET",
		headers: { "x-zocom": apiKey },
	});

	const solarisData = await response.json();
	console.log("Solaris Data:", solarisData.bodies); // Logga data om planeter
	return solarisData.bodies;
}

// Hämtar API-nyckeln och därefter datan om solsystemets kroppar. Sparar denna data i localStorage
async function getApiData() {
	try {
		const apiKey = await fetchApiKey(); // Hämta API-nyckeln
		const bodies = await getData(apiKey); // Hämta data om planeter med API-nyckeln
		console.log("Bodies:", bodies);
		localStorage.setItem("bodies", JSON.stringify(bodies)); // Spara data till localStorage

		const storedData = JSON.parse(localStorage.getItem("bodies")); // Hämta sparad data från localStorage
		console.log("Stored Data:", storedData);

		return bodies;
	} catch (error) {
		console.log(error); // Logga eventuella fel
	}
}

// Skapar HTML-element för varje planet och lägger till dem i en behållare på sidan.
function writeToPage() {
	const storedData = JSON.parse(localStorage.getItem("bodies")); // Hämta sparad data från localStorage
	const solarSystem = document.createElement("div"); // Skapa en behållare för solsystemet
	solarSystem.classList.add("system");
	solarSystem.id = "solsystemet";
	document.body.appendChild(solarSystem);

	storedData.forEach((body) => {
		let planetName = body.name; // Hämta planetens namn
		let newItem = document.createElement("div"); // Skapa en ny div för planeten
		newItem.classList.add("planet");
		newItem.id = body.name.toLowerCase();

		// Lägg till en span för att visa planetens namn vid hover
		let showName = document.createElement("span");
		showName.classList.add("planet-name");
		showName.textContent = planetName;
		newItem.appendChild(showName);
		solarSystem.appendChild(newItem); // Lägg till planeten i solsystemet

		newItem.addEventListener("click", () => {
			window.location.href = `singlePlanet.html?planet=${planetName.toLowerCase()}`;
		});

		newItem.addEventListener("mouseenter", () => {
			document.querySelector("#solarisHeader").textContent = planetName; // Visa planetens namn vid hover
		});
		newItem.addEventListener("mouseleave", () => {
			document.querySelector("#solarisHeader").textContent = "Solaris Space Center"; // Dölj planetens namn när muspekaren lämnar
		});
	});
	addSaturnRing();
}
// flyttad till functions.js
// function getPlanetAttribute(i, attribute) {
// 	// example:
// 	// getplanetAttributes(3, "moons");			// returns: ["Månen"]
// 	// getplanetAttributes(3, "moons")[0];	// returns: "Månen"
// 	// getPlanetAttribute(5, "moons"); 			// returns: [alla jupiters månar i array]

// 	const storedData = JSON.parse(localStorage.getItem("bodies"));
// 	const planetAttr = storedData[i][attribute];
// 	return planetAttr;
// }

//onmouseenter-function
//https://www.w3schools.com/jsref/event_onmouseenter.asp

async function run() {
	// localStorage.clear();
	localStorage.removeItem("bodies");

	await getApiData();
	writeToPage();
	console.log(getPlanetAttribute(5, "moons")[1]); // "ganymedes"
	console.log(getPlanetAttribute(5, "moons")); // alla jupiters månar i array
}

const favoritesBtn = document.getElementById("toFavorites");
favoritesBtn.addEventListener("click", () => {
	window.location.href = "favorite.html"; //
});

function addSaturnRing() {
	let saturnTemp = document.getElementById("saturnus");
	console.log("Before:", saturnTemp);
	console.log("Adding Saturn's ring!");
	console.log("After:", saturnTemp);
	let newItem = document.createElement("span");
	newItem.classList.add("ring");
	document.getElementById("saturnus").appendChild(newItem);
}

run();
