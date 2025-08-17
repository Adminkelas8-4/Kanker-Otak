// Dark Mode
const toggleBtn = document.getElementById("darkModeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Chart.js Statistik Kanker
const ctx = document.getElementById("cancerChart").getContext("2d");
new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Asia", "Eropa", "Amerika", "Afrika"],
    datasets: [{
      label: "Kasus Kanker Otak (per 100.000 orang)",
      data: [15, 12, 10, 8],
      backgroundColor: ["#1a73e8", "#34a853", "#fbbc05", "#ea4335"]
    }]
  }
});

// Form Submit
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Terima kasih! Pesan Anda telah terkirim.");
  this.reset();
});
