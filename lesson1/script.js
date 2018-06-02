var budgetIn = prompt("Ваш бюджет на месяц : ", 1000)
var storeNameIn = prompt("Название вашего магазина ", "Котошоп")

mainList = { 
		
		budget: budgetIn,
		storeName: storeNameIn,
		shopGoods: [],
		employers: {},
		open: true
};

// for (let i = 0; i < 5; i++){
// 	let a = prompt('Какой тип товара будем продавать?')
// 	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != "" && a.length < 50  ){
// 	mainList.shopGoods[i] = a;
// 	console.log(mainList)
// 	}
// }

// let count = 0;
// while (count < 5){
// 	let a = prompt('Какой тип товара будем продавать?')
// 	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != "" && a.length < 50  ){
// 		mainList.shopGoods[count] = a;
// 		console.log(mainList)
// 		count++;
// 		}
// }
let count = 0;
let a = prompt('Какой тип товара будем продавать?');


 do {
	let a = prompt('Какой тип товара будем продавать?');
	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != "" && a.length < 50  ){
		mainList.shopGoods[count] = a;
		console.log(mainList)
		count++;
	}
		}	while (count < 5);
		
 

 

 

 




