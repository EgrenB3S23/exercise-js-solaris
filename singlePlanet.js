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
	document.querySelector(".singleRadius").textContent = `${getPlanetAttribute(nameToIndex(capitalizeWord(planet)), "circumference")} KM`;
	document.querySelector(".singleRadius").textContent = `${formatNumber(getPlanetAttribute(nameToIndex(capitalizeWord(planet)), "circumference"))} KM`;
	document.querySelector(".singleKm").textContent = `${formatNumber(getPlanetAttribute(nameToIndex(capitalizeWord(planet)), "distance"))} KM`;
	document.querySelector(".singleMaxtemp").textContent = `${getPlanetAttribute(nameToIndex(capitalizeWord(planet)), "temp").day} ºC`;
	document.querySelector(".singleMintemp").textContent = `${getPlanetAttribute(nameToIndex(capitalizeWord(planet)), "temp").night} ºC`;
	document.querySelector(".singleMoons").textContent = getPlanetAttribute(nameToIndex(capitalizeWord(planet)), "moons").join(", ");

	setHalfCircleColor(capitalizeWord(planet));

	updateFavoriteButtons(capitalizeWord(planet));
}

//Formaterar avståndsformat för läsbarhet
function formatNumber(number) {
	return new Intl.NumberFormat("sv-SE").format(number);
}
//Funktion för att ändra bakgrundsfärgen på halvcirklarna. "switch-sats" för att välja rätt färg och funktionen hexToRGBA för att skapa semitransparenta färger. Specifik färgkod baserat på planetens namn.
function setHalfCircleColor(planetName) {
	const halfCircle = document.querySelector(".half-circle");
	const corona1 = document.querySelector(".corona-1");
	const corona2 = document.querySelector(".corona-2");
	let color;
	switch (planetName) {
		case "Solen":
			color = "#ffd028";
			break;
		case "Merkurius":
			color = "#8d8b85";
			break;
		case "Venus":
			color = "#e7cccb";
			break;
		case "Jorden":
			color = "#428ed5";
			break;
		case "Mars":
			color = "#f05f5f";
			break;
		case "Jupiter":
			color = "#e29468";
			break;
		case "Saturnus":
			color = "#c7aa72";
			break;
		case "Uranus":
			color = "#c9d4f1";
			break;
		case "Neptunus":
			color = "#7a92a7";
			break;
		default:
			color = "#428ed4"; // Standardfärg om planeten inte matchar någon av ovanstående
	}

	//Sätter bakgrundsfärgen på halvcirkeln direkt till den färg vi valde i switch-satsen. Funktionen hexToRGBA för att omvandla hex-färgen till en RGBA-färg med olika transparenser (0.35 och 0.15) för de yttre halvcirklarna
	halfCircle.style.backgroundColor = color;
	corona1.style.backgroundColor = hexToRGBA(color, 0.35);
	corona2.style.backgroundColor = hexToRGBA(color, 0.15);
}

//Hjälpfunktion som omvandlar en hex-färgkod till en RGBA-färgkod med en specificerad transparens. Gör att de två yttre halvcirklarna kan ha semitransparenta versioner av huvudfärgen.
function hexToRGBA(hex, alpha) {
	// Om hex-koden börjar med #, ta bort det
	hex = hex.replace(/^#/, "");

	// Dela upp hex-koden i RGB-komponenter
	let r = parseInt(hex.substring(0, 2), 16);
	let g = parseInt(hex.substring(2, 4), 16);
	let b = parseInt(hex.substring(4, 6), 16);

	// Returnera RGB-komponenterna med alfa-kanal. Alpha är den transparensnivå vi skickade in som argument.
	return `rgba(${r}, ${g}, ${b}, ${alpha})`;
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
