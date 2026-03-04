const container = document.getElementById("content");

diseases.forEach(disease => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h2>${disease.name}</h2>
    <p><strong>Overview:</strong> ${disease.overview}</p>
    <p><strong>Symptoms:</strong> ${disease.symptoms.join(", ")}</p>
    <p><strong>Prognosis:</strong> ${disease.prognosis}</p>
  `;

  const btn = document.createElement("button");
  btn.textContent = "View Treatments";
  btn.onclick = () => {
    alert(
      disease.treatments.map(t => 
        `${t.name} - ${t.purpose}\nSide Effects: ${t.sideEffects.join(", ")}`
      ).join("\n\n")
    );
  };

  card.appendChild(btn);
  container.appendChild(card);
});
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}
