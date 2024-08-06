function capitalizeWord(word) {
	if (word.length === 0) return word;
	return word.charAt(0).toUpperCase() + word.slice(1);
}

function getPlanetAttribute(i, attribute) {
	// example:
	// getplanetAttributes(3, "moons");     // returns: ["Månen"]
	// getplanetAttributes(3, "moons")[0];  // returns: "Månen"
	// getPlanetAttribute(5, "moons");      // returns: [alla jupiters månar i array]

	console.log(`running getPlanetAttributes(${i}, ${attribute})`);
	const storedData = JSON.parse(localStorage.getItem("bodies"));
	const planetAttr = storedData[i][attribute];
	return planetAttr;
}

function removeElementAtIndex(arr, i) {
	// example:
	// removeElementAtIndex([a,b,c,d,e], 3);       // returns: [a,b,c,e]
	// removeElementAtIndex([a,b], 3);             // returns: [a,b]

	if (i < 0 || i >= arr.length) {
		throw new Error("Index out of bounds");
	}

	return arr.slice(0, i).concat(arr.slice(i + 1));
}

function removeElementFromArr(arr = [], element) {
	// example:
	// arr = ["a", "b", "c", "d", "e"];
	// removeElementFromArr(arr, "d");

	if (arr.length === 0) {
		throw new Error("Array is empty. Returning unchanged array.");
	}

	const match = (e) => e === element;

	const indexToRemove = arr.findIndex(match);

	return arr.slice(0, indexToRemove).concat(arr.slice(indexToRemove + 1));
}

function addToFavorites(planetName) {
	let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

	if (!favorites.includes(planetName)) {
		favorites.push(planetName);
		localStorage.setItem("favorites", JSON.stringify(favorites));
		alert(`${planetName} har lagts till i din favoritlista.`);
	} else {
		alert(`${planetName} finns redan i din favoritlista.`);
	}
}

function removeFromFavorites(planetName) {
	// if favorites cointain planetName, remove that element. Returns result.
	let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

	if (favorites.includes(planetName)) {
		favorites = removeElementFromArr(favorites, planetName);
		console.log(favorites);
		localStorage.setItem("favorites", JSON.stringify(favorites));
		alert(`${planetName} har tagits bort från din favoritlista.`);
	} else {
		alert(`${planetName} finns inte med i din favoritlista.`);
	}
}
