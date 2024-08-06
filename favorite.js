// skriv funktion för att hämta favorit
// skriv funktion för att hämta favorit

function renderCard() {
    const container = document.querySelector(".favoriteContainer");
    // Placeholder för att hämta data från indexToName:
    const planetdata = [
      { name: "Solen" },
      { name: "Saturnus" },
      { name: "Venus" },
      { name: "Uranus" },
    ];
  
    //loop för att lägga till datan i separata kort
    for (let i = 0; i < planetdata.length; i++) {
      const item = planetdata[i];
      const card = document.createElement("div");
      card.classList.add("planetCard");
  
      const name = document.createElement("h2");
      name.textContent = item.name;
  
      const symbol = document.createElement("div");
      symbol.classList.add("symbol");
  
      //sätter planetens färger utifrån namn
  
      if (item.name == "Solen") {
        symbol.style.backgroundColor = "#ffd028";
      }
      if (item.name == "Merkurius") {
        symbol.style.backgroundColor = "#8d8b85";
      }
      if (item.name == "Venus") {
        symbol.style.backgroundColor = "#e7cccb";
      }
      if (item.name == "Jorden") {
        symbol.style.backgroundColor = "#428ed5";
      }
      if (item.name == "Mars") {
        symbol.style.backgroundColor = "#f05f5f";
      }
      if (item.name == "Jupiter") {
        symbol.style.backgroundColor = "#e29468";
      }
      if (item.name == "Saturnus") {
        symbol.style.backgroundColor = " #c7aa72";
      }
      if (item.name == "Uranus") {
        symbol.style.backgroundColor = "#c9d4f1";
      }
      if (item.name == "Neptunus") {
        symbol.style.backgroundColor = " #7a92a7";
      }
  
      card.appendChild(name);
      card.appendChild(symbol);
  
      container.appendChild(card);
    }
  }
  
  renderCard();
  