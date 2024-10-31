// Laad de waarden in de invoervelden bij het laden van de pagina
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("ovamFee").value = localStorage.getItem("ovamFee") || 50;
    document.getElementById("certificationFee").value = localStorage.getItem("certificationFee") || 25;
    document.getElementById("sampleCost").value = localStorage.getItem("sampleCost") || 16;
  });
  
  function saveSettings() {
    const ovamFee = parseFloat(document.getElementById("ovamFee").value);
    const certificationFee = parseFloat(document.getElementById("certificationFee").value);
    const sampleCost = parseFloat(document.getElementById("sampleCost").value);
  
    // Sla de nieuwe waarden op in localStorage
    localStorage.setItem("ovamFee", ovamFee);
    localStorage.setItem("certificationFee", certificationFee);
    localStorage.setItem("sampleCost", sampleCost);
  
    alert("Instellingen zijn opgeslagen!");
  }
  