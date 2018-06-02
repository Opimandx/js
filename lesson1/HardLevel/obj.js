// Создать объект mainList, который будет содержать такие данные:

// ·        Бюджет

// ·        Имя магазина

// ·        Массив товаров shopGoods

// ·        Объект с сотрудниками employers

// ·        Свойство open


var budget = prompt(" Введите бюджет: ", 1000);
var storeName = prompt(" Введите название: ", 'Котошоп');



mainList = {
    budget: 1000,
    storeName: 'Чилер',
    shopGoogs = [1,2,3],
    employers = {},
    open: true

}


mainList.budget = budget;
mainList.storeName = storeName

console.log(mainList)