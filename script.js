let cars = [];

// 1. Ngarko makinat nga localStorage
if (localStorage.getItem("cars")) {
  cars = JSON.parse(localStorage.getItem("cars"));
} else {
  cars = [
    { id: 1, model: "Audi A4", year: 2018, price: 15000 },
    { id: 2, model: "BMW 320", year: 2019, price: 18000 },
    { id: 3, model: "Mercedes C-Class", year: 2020, price: 22000 }
  ];
  localStorage.setItem("cars", JSON.stringify(cars));
}


// Funksioni për shfaqjen e makinave
function displayCars() {
  const list = document.getElementById("car-list");
  list.innerHTML = "";

  cars.forEach(car => {
    list.innerHTML += `
      <div class="car">
        <h3>${car.model}</h3>
        <p><strong>Viti:</strong> ${car.year}</p>
        <p><strong>Çmimi:</strong> €${car.price}</p>
        <button onclick="deleteCar(${car.id})" class="delete-btn">Fshi</button>
      </div>
    `;
  });
}


// Funksioni për shtimin e makinës
function addCar() {
  const model = document.getElementById("model").value;
  const year = document.getElementById("year").value;
  const price = document.getElementById("price").value;

  if (model === "" || year === "" || price === "") {
    alert("Ju lutem plotësoni të gjitha fushat.");
    return;
  }

  const newCar = {
    id: cars.length > 0 ? cars[cars.length - 1].id + 1 : 1,
    model: model,
    year: parseInt(year),
    price: parseFloat(price)
  };

  cars.push(newCar);

  // ruaj në localStorage
  localStorage.setItem("cars", JSON.stringify(cars));

  displayCars();

  // pastro inputet
  document.getElementById("model").value = "";
  document.getElementById("year").value = "";
  document.getElementById("price").value = "";
}


// Funksion për fshirjen e makinës
function deleteCar(id) {
  if (!confirm("A je i sigurt që dëshiron ta fshish këtë makinë?")) return;

  cars = cars.filter(car => car.id !== id);

  // ruaj versionin e ri
  localStorage.setItem("cars", JSON.stringify(cars));

  displayCars();
}

displayCars();
