let money, name, budgt;
//·        Получить кнопку "Открыть магазин" через id
let opnBtn = document.getElementById("open-btn");
//·        Получить все поля в левом меню через классы
let nameVal = document.getElementsByClassName("name-value")[0],
	budgVal = document.getElementsByClassName("budget-value")[0],
	goodVal = document.getElementsByClassName('goods-value')[0],
	itemVal = document.getElementsByClassName('items-value')[0],
	employVal = document.getElementsByClassName('employers-value')[0],
	discountVal = document.getElementsByClassName('discount-value'),
	isOpn = document.querySelector('.isopen-value');
choose_item = document.querySelector('.choose-item');
//        Получить все 3 кнопки через Tag
let goods_btn = document.getElementsByTagName('button')[1];
let budget_btn = document.getElementsByTagName('button')[2];
let employers_btn = document.getElementsByTagName('button')[3];
//·        Получить поля категории товаров через класс
let goods_items = document.getElementsByClassName('goods-item');
let categoryGoods1 = document.querySelector('.goods-item')[0],
	categoryGoods2 = document.querySelector('.goods-item')[1],
	categoryGoods3 = document.querySelector('.goods-item')[2],
	categoryGoods4 = document.querySelector('.goods-item')[3];

//·        Получить поля ввода товаров, времени и расчета бюджета через querySelector
let time_value = document.querySelector('.time-value');

let budget_value = document.querySelector('.count-budget-value');

let employersName = document.querySelectorAll('.hire-employers-item');
mainList = {

	budget: budgt,
	storeName: name,
	shopGoods: [],
	employers: {},
	open: false,
	shopItems: [],
	discount: true,
	 
	showDiscountPrice: function showDiscountPrice(discount) {
		if (discount === true)
			return (price * 20) / 100;
	},
	
	 
	 

};







// показываем наши товары по порядку
mainList.shopGoods.forEach(function (item, i, arr) {
	console.log(i + 1 + ': ' + item + " ")
})

// показываем свойства объекта
for (key in mainList) {
	console.log(key)
}







opnBtn.addEventListener('click', () => {


	money = prompt("Ваш бюджет на месяц : ", 1000)

	while (isNaN(money) || money == "" || money == null) {
		money = prompt("Ваш бюджет на месяц : ", 1000)
	}
	budgVal.textContent = money;


	nameVal.textContent = prompt("Название вашего магазина ", "Котошоп").toUpperCase();
	while (typeof (name) != 'string' && (typeof (name)) == null && name == "" && name.length < 50) {
		name = prompt("Название вашего магазина ", "").toUpperCase();
	}

});

goods_btn.addEventListener('click', () => {
	for (let i = 0; i < goods_items.length; i++) {
		var a = goods_items[i].value
		if ((typeof (a)) === 'string' && (typeof (a)) !== null && a.length < 50) {
			mainList.shopGoods[i] = a;
			goodVal.textContent = mainList.shopGoods;
			console.log(mainList.shopGoods);
		} else {
			i--;
		}
	}
});


choose_item.addEventListener('change', () => {
	let items = choose_item.value;
	if (isNaN(items) && items != "") {
		mainList.shopItems = items.split(', ');
		mainList.shopItems.sort();
		itemVal.textContent = mainList.shopItems;
	}
});

time_value.addEventListener('change', () => {
	let time = time_value.value;
	if (time < 0) {
		mainList.open = false;
	} else if (time > 8 && time < 20) {
		mainList.open = true;
	} else if (time < 24) {
		mainList.open = false;
	}
	if (mainList.open == true) {
		isOpn.style.backgroundColor = 'green';
	} else {
		isOpn.style.backgroundColor = 'red';
	}
})


budget_btn.addEventListener('click', () => {
	budget_value.value = money / 30;
});

employers_btn.addEventListener('click', () => {
	for (let i = 0; i < employersName.length; i++) {
		let name = employersName[i].value;
		mainList.employers[i] = name;
		employVal.textContent += mainList.employers[i] + ', '; 
	}
});