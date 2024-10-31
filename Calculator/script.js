// Functie om de laatste berekening op te slaan
function saveLastCalculation(sampleCount, price, profit) {
    const lastCalculation = {
      sampleCount: sampleCount,
      price: price,
      profit: profit,
    };
    localStorage.setItem("lastCalculation", JSON.stringify(lastCalculation));
  }
  
  // Functie om de laatste berekening op te halen en in te vullen
  function loadLastCalculation() {
    const lastCalculation = JSON.parse(localStorage.getItem("lastCalculation"));
    if (lastCalculation) {
      document.getElementById("sampleCount").value = lastCalculation.sampleCount;
      document.getElementById("price").value = lastCalculation.price;
      document.getElementById("profitOutput").textContent = `Je winst na kosten is: €${lastCalculation.profit.toFixed(2)}`;
    }
  }
  
  // Functie voor het berekenen van winst
  function calculateProfit() {
    const sampleCount = parseInt(document.getElementById("sampleCount").value);
    const price = parseFloat(document.getElementById("price").value);
  
    // Haal de vaste kosten op uit localStorage
    const ovamFee = parseFloat(localStorage.getItem("ovamFee")) || 50;
    const certificationFee = parseFloat(localStorage.getItem("certificationFee")) || 25;
    const sampleCost = parseFloat(localStorage.getItem("sampleCost")) || 16;
  
    // Bereken de totale kosten per staal inclusief BTW
    const sampleCostWithVAT = sampleCost + (sampleCost * 0.21);
    const totalSampleCostWithVAT = sampleCount * sampleCostWithVAT;
  
    // Bereken de totale vaste kosten inclusief BTW
    const totalFixedCosts = ovamFee + certificationFee + (certificationFee * 0.21);
    const totalCost = totalFixedCosts + totalSampleCostWithVAT;
    const profit = price - totalCost;
  
    // Sla de laatste berekening op
    saveLastCalculation(sampleCount, price, profit);
  
    document.getElementById("profitOutput").textContent =
      profit >= 0
        ? `Je winst na kosten is: €${profit.toFixed(2)}`
        : `Verlies: Je hebt een verlies van €${Math.abs(profit).toFixed(2)}`;
  
    // Toon de formule met ingevulde waarden
    showFormula(ovamFee, certificationFee, sampleCount, sampleCost, price);
  }
  
  // Functie om de formule te tonen met ingevulde waarden
  function showFormula(ovamFee, certificationFee, sampleCount, sampleCost, price) {
    const formula = `Winst = Prijs - (Retributie OVAM + Certificatie Instelling + (Certificatie Instelling * 0.21) + (Aantal Stalen * (Kosten per Staal + (Kosten per Staal * 0.21))))`;
    
    const filledFormula = `Winst = €${price} - (€${ovamFee} + €${certificationFee} + (€${certificationFee} * 0.21) + (${sampleCount} * (€${sampleCost} + (€${sampleCost} * 0.21))))`;
    
    document.getElementById("formulaDisplay").innerHTML = `${formula}<br>${filledFormula}`;
  }
  
  // Laad de laatste berekening bij het laden van de pagina
  document.addEventListener("DOMContentLoaded", loadLastCalculation);
  