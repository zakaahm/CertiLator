let addressLibrary = [];

function addAddress() {
  const address = document.getElementById("address").value;
  const offer = parseFloat(document.getElementById("offer").value);

  if (address && !isNaN(offer)) {
    const newEntry = {
      address: address,
      offer: offer
    };

    addressLibrary.push(newEntry);
    document.getElementById("address").value = '';
    document.getElementById("offer").value = '';

    renderAddressList();
  }
}

function renderAddressList() {
  const addressList = document.getElementById("addressList");
  addressList.innerHTML = '';

  addressLibrary.forEach((entry) => {
    const li = document.createElement("li");
    li.textContent = `${entry.address} - Offerte: €${entry.offer.toFixed(2)}`;
    addressList.appendChild(li);
  });
}
