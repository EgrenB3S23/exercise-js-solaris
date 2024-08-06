document.addEventListener("DOMContentLoaded", () => {
	const addToFavoritesBtn = document.getElementById("addFavorite");
	addToFavoritesBtn.addEventListener("click", () => {
		const url = new URL(window.location.href);
		const params = new URLSearchParams(url.search);
		const planet = params.get("planet");
		if (planet) {
			addToFavorites(capitalizeWord(planet));
		}
	});

	//todo erik (removefromfavorites button)
	const removeFromFavoritesBtn = document.getElementById("removeFavorite");
	removeFromFavoritesBtn.addEventListener("click", () => {
		const url = new URL(window.location.href);
		const params = new URLSearchParams(url.search);
		const planet = params.get("planet");
		if (planet) {
			removeFromFavorites(capitalizeWord(planet));
		}
	});

	const backBtn = document.getElementById("goBack");
	backBtn.addEventListener("click", () => {
		window.history.back(); //window.location.href = "index-html";
	});

	run();
});

// removeFromFavorites("Jupiter"); //todo erik

function run() {
	const url = new URL(window.location.href);
	const params = new URLSearchParams(url.search);
	const planet = params.get("planet");

	const planetInfo = document.createElement("div");

	planetInfo.classList.add("info");
	planetInfo.id = "planetInfo";
	planetInfo.innerText = getPlanetAttribute(nameToIndex(capitalizeWord(planet)), "name").toUpperCase();
	document.body.appendChild(planetInfo);
}

// flyttad till functions.js
// function getPlanetAttribute(i, attribute) {
// 	// example:
// 	// getplanetAttributes(3, "moons");
// 	// ...returns: ["Månen"]
// 	// getplanetAttributes(3, "moons")[0];
// 	// ...returns: "Månen"
// 	console.log(`running getPlanetAttributes(${i}, ${attribute})`);
// 	const storedData = JSON.parse(localStorage.getItem("bodies"));
// 	const planetAttr = storedData[i][attribute];

// 	return planetAttr;
// }

function indexToName(index) {
	// example:
	// indexToName(2) returns "Venus"
	switch (index) {
		case 0:
			return "Solen";
		case 1:
			return "Merkurius";
		case 2:
			return "Venus";
		case 3:
			return "Jorden";
		case 4:
			return "Mars";
		case 5:
			return "Jupiter";
		case 6:
			return "Saturnus";
		case 7:
			return "Uranus";
		case 8:
			return "Neptunus";
		default:
			return undefined;
	}
}

function nameToIndex(name) {
	// example:
	// nameToIndex("Venus") returns 2
	switch (name) {
		case "Solen":
			return 0;
		case "Merkurius":
			return 1;
		case "Venus":
			return 2;
		case "Jorden":
			return 3;
		case "Mars":
			return 4;
		case "Jupiter":
			return 5;
		case "Saturnus":
			return 6;
		case "Uranus":
			return 7;
		case "Neptunus":
			return 8;
		default:
			return undefined;
	}
}

//funktion för att skriva ut planetens info i en tabell
function renderInfo() {}

//let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
//localStorage.clear();

//addToFavorites();
