const cars = [
  { id: 1, model: "Audi A4", year: 2018, price: 15000 },
  { id: 2, model: "BMW 320", year: 2019, price: 18000 },
  { id: 3, model: "Mercedes C-Class", year: 2020, price: 22000 }
];

function displayCars() {
  const list = document.getElementById("car-list");
  list.innerHTML = "";

  cars.forEach(car => {
    list.innerHTML += `
      <div class="car">
        <h3>${car.model}</h3>
        <p><strong>Viti:</strong> ${car.year}</p>
        <p><strong>Çmimi:</strong> €${car.price}</p>
      </div>
    `;
  });
}

displayCars();
