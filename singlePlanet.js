document.addEventListener("DOMContentLoaded", () => {
	const addToFavoritesBtn = document.getElementById("addFavorite");

	addToFavoritesBtn.addEventListener("click", () => {
		const url = new URL(window.location.href);
		const params = new URLSearchParams(url.search);
		const planet = params.get("planet");
		if (planet) {
			addToFavorites(capitalizeWord(planet)); //Funktion från functions.js
		}
	});

	const removeFromFavoritesBtn = document.getElementById("removeFavorite");
	removeFromFavoritesBtn.addEventListener("click", () => {
		const url = new URL(window.location.href);
		const params = new URLSearchParams(url.search);
		const planet = params.get("planet");
		if (planet) {
			removeFromFavorites(capitalizeWord(planet)); //Funktion från functions.js
		}
	});

	const backBtn = document.getElementById("goBack");
	backBtn.addEventListener("click", () => {
		window.location.href = "index.html";
	});

	const favoritesBtn = document.getElementById("goToFavorites");
	favoritesBtn.addEventListener("click", () => {
		window.location.href = "favorite.html";
	});
	run();
});

function run() {
	const url = new URL(window.location.href);
	const params = new URLSearchParams(url.search);
	const planet = params.get("planet");

	const planetInfo = document.createElement("div");

	document.body.appendChild(planetInfo);

	document.querySelector(".singleName").textContent = getPlanetAttribute(nameToIndex(capitalizeWord(planet)), "name").toUpperCase();
	document.querySelector(".singleLatin").textContent = getPlanetAttribute(nameToIndex(capitalizeWord(planet)), "latinName").toUpperCase();
	document.querySelector(".singleDescription").textContent = getPlanetAttribute(nameToIndex(capitalizeWord(planet)), "desc");
	document.querySelector(".singleRadius").textContent = getPlanetAttribute(nameToIndex(capitalizeWord(planet)), "circumference");
	document.querySelector(".singleKm").textContent = getPlanetAttribute(nameToIndex(capitalizeWord(planet)), "distance");
	document.querySelector(".singleMaxtemp").textContent = getPlanetAttribute(nameToIndex(capitalizeWord(planet)), "temp");
	document.querySelector(".singleMintemp").textContent = getPlanetAttribute(nameToIndex(capitalizeWord(planet)), "temp");
	document.querySelector(".singleMoons").textContent = getPlanetAttribute(nameToIndex(capitalizeWord(planet)), "moons");

	setHalfCircleColor(capitalizeWord(planet));
}

function setHalfCircleColor(planetName) {
	const halfCircle = document.querySelector(".half-circle");
	//todo: lägg till färger för corona/atmosfär/half-circle
	switch (planetName) {
		case "Solen":
			halfCircle.style.backgroundColor = "#ffd028";
			break;
		case "Merkurius":
			halfCircle.style.backgroundColor = "#8d8b85";
			break;
		case "Venus":
			halfCircle.style.backgroundColor = "#e7cccb";
			break;
		case "Jorden":
			halfCircle.style.backgroundColor = "#428ed5";
			break;
		case "Mars":
			halfCircle.style.backgroundColor = "#f05f5f";
			break;
		case "Jupiter":
			halfCircle.style.backgroundColor = "#e29468";
			break;
		case "Saturnus":
			halfCircle.style.backgroundColor = "#c7aa72";
			break;
		case "Uranus":
			halfCircle.style.backgroundColor = "#c9d4f1";
			break;
		case "Neptunus":
			halfCircle.style.backgroundColor = "#7a92a7";
			break;
		default:
			halfCircle.style.backgroundColor = "#428ed4";
	}
}

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
