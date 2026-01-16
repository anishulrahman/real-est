const BACKEND_URL = "https://real-est-backend.onrender.com";
/* ESTIMATE PRICE */
async function estimatePrice() {
  const area = document.getElementById("area").value;
  const bedrooms = document.getElementById("bedrooms").value;
  const location = document.getElementById("location").value;

  const response = await fetch(`${BACKEND_URL}/estimate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      area: area,
      bedrooms: bedrooms,
      location: location
    })
  });

  const data = await response.json();
  document.getElementById("price-result").innerText =
    `Estimated Price: ₹${data.estimated_price} Cr`;
}

/* LOAD TREND GRAPH */
async function loadTrend() {
  const res = await fetch(`${BACKEND_URL}/trend`);
  const data = await res.json();

  new Chart(document.getElementById("priceChart"), {
    type: "line",
    data: {
      labels: data.areas,
      datasets: [{
        label: "Price (Cr)",
        data: data.prices,
        borderWidth: 3
      }]
    }
  });
}

window.onload = loadTrend;
