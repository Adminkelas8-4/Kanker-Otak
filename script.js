// Dark Mode & Chart (sama seperti sebelumnya)

// Contact Form dengan backend
document.getElementById("contactForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  try {
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message })
    });

    const data = await res.json();
    document.getElementById("responseMsg").innerText = data.msg || "Pesan terkirim!";
    this.reset();
  } catch (err) {
    document.getElementById("responseMsg").innerText = "Gagal mengirim pesan!";
  }
});
