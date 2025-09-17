const temples = [
  {
    name: "Aba Nigeria Temple",
    location: "Aba, Nigeria",
    dedicated: "2005-08-07",
    area: 11500,
    imageUrl: "images/OIP.webp"
  },
  {
    name: "Manti Utah Temple",
    location: "Manti, Utah, United States",
    dedicated: "1888-05-21",
    area: 74792,
    imageUrl: "images/Barran.webp"
  },
  {
    name: "Payson Utah Temple",
    location: "Payson, Utah, United States",
    dedicated: "2015-06-07",
    area: 96630,
    imageUrl: "images/OIP.webp"
  },
  {
    name: "Yigo Guam Temple",
    location: "Yigo, Guam",
    dedicated: "2020-05-02",
    area: 6861,
    imageUrl: "images/Barran.webp"
  },
  {
    name: "Washington D.C. Temple",
    location: "Kensington, Maryland, United States",
    dedicated: "1974-11-19",
    area: 156558,
    imageUrl: "images/OIP.webp"
  },
  {
    name: "Lima Perú Temple",
    location: "Lima, Perú",
    dedicated: "1986-01-10",
    area: 9600,
    imageUrl: "images/Barran.webp"
  },
  {
    name: "Mexico City Mexico Temple",
    location: "Mexico City, Mexico",
    dedicated: "1983-12-02",
    area: 116642,
    imageUrl: "images/OIP.webp"
  },
  {
    name: "Kampala Uganda Temple",
    location: "Kampala, Uganda",
    dedicated: "2025-08-01",
    area: 18000,
    imageUrl: "images/Barran.webp"
  },
  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, UT",
    dedicated: "1893-04-06",
    area: 253000,
    imageUrl: "images/OIP.webp"
  }
];

function displayTemples(templesArray) {
  const container = document.getElementById("temples-container");
  container.innerHTML = "";

  templesArray.forEach(temple => {
    const card = document.createElement("figure");

    const caption = document.createElement("figcaption");
    caption.innerHTML = `
      <strong>${temple.name}</strong><br>
      Location: ${temple.location}<br>
      Dedicated: ${temple.dedicated}<br>
      Area: ${temple.area.toLocaleString()} sq ft
    `;

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.name;
    img.loading = "lazy";

    card.appendChild(caption);
    card.appendChild(img);
    container.appendChild(card);
  });
}

document.getElementById("hamburger").addEventListener("click", () => {
  const navLinks = document.getElementById("nav-links");
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});

function filterTemples(criteria) {
  let filtered = [];

  switch (criteria) {
    case "old":
      filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
      break;
    case "new":
      filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
      break;
    case "large":
      filtered = temples.filter(t => t.area > 90000);
      break;
    case "small":
      filtered = temples.filter(t => t.area < 10000);
      break;
    default:
      filtered = temples;
  }

  displayTemples(filtered);
}

// Event listeners for nav links
document.getElementById("home").addEventListener("click", () => filterTemples("all"));
document.getElementById("old").addEventListener("click", () => filterTemples("old"));
document.getElementById("new").addEventListener("click", () => filterTemples("new"));
document.getElementById("large").addEventListener("click", () => filterTemples("large"));
document.getElementById("small").addEventListener("click", () => filterTemples("small"));

// Initial display
displayTemples(temples);
