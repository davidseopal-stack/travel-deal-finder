
const deals = [
  {
    hotel: "Sunny Beach Resort",
    destination: "Egypt",
    departure: "Bratislava",
    price: 549,
    rating: 9.1,
    board: "All Inclusive",
    emoji: "🏖️"
  },
  {
    hotel: "Blue Lagoon Palace",
    destination: "Grécko",
    departure: "Košice",
    price: 689,
    rating: 9.4,
    board: "All Inclusive",
    emoji: "🇬🇷"
  },
  {
    hotel: "Palm Garden Hotel",
    destination: "Turecko",
    departure: "Bratislava",
    price: 599,
    rating: 8.8,
    board: "Ultra All Inclusive",
    emoji: "🌴"
  },
  {
    hotel: "Sahara Beach Club",
    destination: "Tunisko",
    departure: "Poprad",
    price: 459,
    rating: 8.5,
    board: "All Inclusive",
    emoji: "☀️"
  },
  {
    hotel: "Aegean Bay Hotel",
    destination: "Grécko",
    departure: "Bratislava",
    price: 735,
    rating: 9.6,
    board: "Raňajky",
    emoji: "🌊"
  },
  {
    hotel: "Red Sea Family Resort",
    destination: "Egypt",
    departure: "Košice",
    price: 629,
    rating: 9.0,
    board: "All Inclusive",
    emoji: "🐠"
  }
];

const dealsContainer = document.getElementById("deals");
const destinationFilter = document.getElementById("destinationFilter");
const departureFilter = document.getElementById("departureFilter");
const sortFilter = document.getElementById("sortFilter");
const allInclusiveFilter = document.getElementById("allInclusiveFilter");

function renderDeals() {
  let filteredDeals = [...deals];

  const selectedDestination = destinationFilter.value;
  const selectedDeparture = departureFilter.value;
  const selectedSort = sortFilter.value;
  const onlyAllInclusive = allInclusiveFilter.checked;

  if (selectedDestination !== "all") {
    filteredDeals = filteredDeals.filter(deal => deal.destination === selectedDestination);
  }

  if (selectedDeparture !== "all") {
    filteredDeals = filteredDeals.filter(deal => deal.departure === selectedDeparture);
  }

  if (onlyAllInclusive) {
    filteredDeals = filteredDeals.filter(deal => deal.board.includes("All Inclusive"));
  }

  if (selectedSort === "priceAsc") {
    filteredDeals.sort((a, b) => a.price - b.price);
  }

  if (selectedSort === "ratingDesc") {
    filteredDeals.sort((a, b) => b.rating - a.rating);
  }

  if (filteredDeals.length === 0) {
    dealsContainer.innerHTML = `<div class="empty">Žiadne ponuky nevyhovujú filtru.</div>`;
    return;
  }

  dealsContainer.innerHTML = filteredDeals.map(deal => `
    <article class="card">
      <div class="card-image">${deal.emoji}</div>
      <div class="card-content">
        <h2>${deal.hotel}</h2>
        <div class="meta">${deal.destination} • odlet ${deal.departure}</div>

        <div class="tags">
          <span class="tag">${deal.board}</span>
          <span class="tag">hodnotenie ${deal.rating}/10</span>
        </div>

        <div class="rating">★ ${deal.rating}</div>
        <div class="price">od ${deal.price} € / osoba</div>
      </div>
    </article>
  `).join("");
}

destinationFilter.addEventListener("change", renderDeals);
departureFilter.addEventListener("change", renderDeals);
sortFilter.addEventListener("change", renderDeals);
allInclusiveFilter.addEventListener("change", renderDeals);

renderDeals();
