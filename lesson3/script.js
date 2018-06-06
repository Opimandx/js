var budgetIn = prompt("Ваш бюджет на месяц : ", 1000)
var storeNameIn = prompt("Название вашего магазина ", "Котошоп")

mainList = {

	budget: budgetIn,
	storeName: storeNameIn,
	shopGoods: [],
	employers: {},
	open: false,
	discount: true
};

for (let i = 0; i < 5; i++) {
	let a = prompt('Какой тип товара будем продавать?')
	if ((typeof (a)) === 'string' && (typeof (a)) !== null && a != "" && a.length < 50) {
		mainList.shopGoods[i] = a;
		i--;
		console.log(mainList)
	}
}


function getDailyBudget(budget) {
	return budget / 30;
}

console.log(getDailyBudget(mainList.budget));

let discount = true;

function showDiscountPrice(discount) {
	if (discount === true)
		return (price * 20) / 100;
}

function employers() {
	for (let i = 0; i < 5; i++) {
		let name = prompt('Введите имя человека');
		if ((typeof (name)) === 'string' && (typeof (name)) !== null && name != "" && name.length < 50) {
			mainList.employers[i + 1] = name;

		} else {
			alert("Ошибка!");
			i--;


		}
	}
}


employers();
console.log(mainList.employers);







