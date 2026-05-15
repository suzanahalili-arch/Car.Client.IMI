const cars = [
  { id: 1, model: "Audi A4", year: 2018, price: 15000 },
  { id: 2, model: "BMW 320", year: 2019, price: 18000 }
];

function displayCars() {
  const div = document.getElementById("car-list");
  div.innerHTML = "";
  cars.forEach(car => {
    div.innerHTML += `
      <div>
        <h3>${car.model}</h3>
        <p>Viti: ${car.year}</p>
        <p>Cmimi: €${car.price}</p>
      </div>
    `;
  });
}

displayCars();
