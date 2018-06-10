var budgetIn = prompt("Ваш бюджет на месяц : ", 1000)
var storeNameIn = prompt("Название вашего магазина ", "Котошоп")

mainList = {

	budget: budgetIn,
	storeName: storeNameIn,
	shopGoods: [],
	employers: {},
	open: false,
	discount: true,
	getDailyBudget: function getDailyBudget(budget) {
		return budget / 30;
	},
	showDiscountPrice: function showDiscountPrice(discount) {
		if (discount === true)
			return (price * 20) / 100;
	},
	employers: function employers() {
		for (let i = 0; i < 5; i++) {
			let name = prompt('Введите имя человека');
			if ((typeof (name)) === 'string' && (typeof (name)) !== null && name != "" && name.length < 50) {
				mainList.employers[i + 1] = name;

			} else {
				alert("Ошибка!");
				i--;


			}
		}
	},
	kindOfGoods: function kindOfGoods() {
		for (let i = 0; i < 5; i++) {
			var a = prompt('Какой тип товара будем продавать?');
			if ((typeof (a)) === 'string' && (typeof (a)) !== null && a != "" && a.length < 50) {
				mainList.shopGoods[i] = a;
				
				console.log(mainList.shopGoods);
			} else {
				i--;
			}
		}
	},
	workTime: function workTime(time) {
		if (time < 0) {
			console.log('Такого не может быть!');
		} else if (time > 8 && time < 20) {
			console.log('Время работать!');
		} else if (time < 24) {
			console.log('Уже слишком поздно')
		}
	}

};




 
mainList.kindOfGoods();


mainList.shopGoods.forEach(function(item, i, arr){
	console.log(i + 1+': '+ item+ " ")
})


for (key in mainList){
	console.log(key)
}