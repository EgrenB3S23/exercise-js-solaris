// function renderCard() {
// 	const container = document.querySelector(".favoriteContainer");

// 	// Placeholder för att hämta data från indexToName:

// 	const planetdata = [{ name: "Solen" }, { name: "Saturnus" }, { name: "Venus" }, { name: "Uranus" }];

// 	//loop för att lägga till datan i separata kort
// 	for (let i = 0; i < planetdata.length; i++) {
// 		const item = planetdata[i];
// 		const card = document.createElement("div");
// 		card.classList.add("planetCard");

// 		const name = document.createElement("h2");
// 		name.textContent = item.name;

// 		const symbol = document.createElement("div");
// 		symbol.classList.add("symbol");

// 		//sätter planetens färger utifrån namn

// 		if (item.name == "Solen") {
// 			symbol.style.backgroundColor = "#ffd028";
// 		}
// 		if (item.name == "Merkurius") {
// 			symbol.style.backgroundColor = "#8d8b85";
// 		}
// 		if (item.name == "Venus") {
// 			symbol.style.backgroundColor = "#e7cccb";
// 		}
// 		if (item.name == "Jorden") {
// 			symbol.style.backgroundColor = "#428ed5";
// 		}
// 		if (item.name == "Mars") {
// 			symbol.style.backgroundColor = "#f05f5f";
// 		}
// 		if (item.name == "Jupiter") {
// 			symbol.style.backgroundColor = "#e29468";
// 		}
// 		if (item.name == "Saturnus") {
// 			symbol.style.backgroundColor = " #c7aa72";
// 		}
// 		if (item.name == "Uranus") {
// 			symbol.style.backgroundColor = "#c9d4f1";
// 		}
// 		if (item.name == "Neptunus") {
// 			symbol.style.backgroundColor = " #7a92a7";
// 		}

// 		card.appendChild(name);
// 		card.appendChild(symbol);

// 		container.appendChild(card);
// 	}
// }

//renderCard();

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
