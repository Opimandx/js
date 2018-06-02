var budget = prompt("Ваш бюджет на месяц : ", 1000)
var storeName = prompt("Название вашего магазина ", "Котошоп")

mainList = {};  //хотел инициализоровать как в видео, но почему-то не получалось, 
				//были синтаксические ошибки. Нашел в учебнике такой способ - заработало :с


mainList.budget = budget;
mainList.storeName = storeName;
mainList.shopGoods = ["first", "second", "third"];
mainList.employers = {};
mainList.open = true;


mainList.shopGoods[0] = prompt("Введите название первого товара", '')
mainList.shopGoods[1] = prompt("Введите название второго товара", '')
mainList.shopGoods[2] = prompt("Введите название третьего товара", '')

 alert(mainList.shopGoods);




 




