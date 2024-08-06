function displayFavorites() {
	const favoriteContainer = document.getElementById("favoritesContainer");
	let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

	favorites.forEach((planetName) => {
		const planetDiv = document.createElement("div");
		planetDiv.classList.add("favoritePlanet");

		const name = document.createElement("h2");
		name.textContent = planetName;
		planetDiv.appendChild(name);

		const symbol = document.createElement("div");
		symbol.classList.add("symbol");

		// Sätter planetens färger utifrån namn
		switch (planetName) {
			case "Solen":
				symbol.style.backgroundColor = "#ffd028";
				break;
			case "Merkurius":
				symbol.style.backgroundColor = "#8d8b85";
				break;
			case "Venus":
				symbol.style.backgroundColor = "#e7cccb";
				break;
			case "Jorden":
				symbol.style.backgroundColor = "#428ed5";
				break;
			case "Mars":
				symbol.style.backgroundColor = "#f05f5f";
				break;
			case "Jupiter":
				symbol.style.backgroundColor = "#e29468";
				break;
			case "Saturnus":
				symbol.style.backgroundColor = "#c7aa72";
				break;
			case "Uranus":
				symbol.style.backgroundColor = "#c9d4f1";
				break;
			case "Neptunus":
				symbol.style.backgroundColor = "#7a92a7";
				break;
		}
		planetDiv.appendChild(symbol);

		const planetLink = document.createElement("a");
		//planetLink.href = "singlePlanet.html";
		planetLink.href = `singlePlanet.html?planet=${planetName.toLowerCase()}`;
		planetLink.appendChild(planetDiv); // Lägg till planetDiv i länken

		favoriteContainer.appendChild(planetLink);
	});
}

document.addEventListener("DOMContentLoaded", (event) => {
	displayFavorites();
});
