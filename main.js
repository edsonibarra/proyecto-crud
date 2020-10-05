console.log('Hello World!');
const tableBody = document.getElementById('table-body');

let cars = [];

function addCar() {	
	const tableBody = document.getElementById('table-body');	
	const brand = document.getElementById('brand').value;
	const model = document.getElementById('model').value;
	const color = document.getElementById('color').value;
	const year = document.getElementById('year').value;
	const price = document.getElementById('price').value;
	
	const car = {
		id: cars.length + 1,
		brand: brand,
		model: model,
		color: color,
		year: year,
		price: price
	}
	cars.push(car);
	const carData =	`<tr>
						<td>${car.brand}</td>
						<td>${car.model}</td>
						<td>${car.color}</td>
						<td>${car.year}</td>
						<td>${car.price}</td>
						<td><button  class="btn btn-danger">Delete</button></td>
						<td><button onclick="deleteCar(${car.id})" class="btn btn-warning">Edit</button></td>
					</tr>`
	tableBody.innerHTML += carData;
}

function deleteCar(id) {
	const carIdPosition = cars.findIndex((id) => id === car.id)
	console.log(carIdPosition);
}

