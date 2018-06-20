
//·        Получить кнопку "Открыть магазин" через id
let opnBtn = document.getElementById("open-btn");
//·        Получить все поля в левом меню через классы
let nameVal = document.getElementsByClassName("name-value"),
    budgVal = document.getElementsByClassName("budget-value"),
    goodVal = document.getElementsByClassName('goods-value'),
    itemVal = document.getElementsByClassName('items-value'),
    employVal = document.getElementsByClassName('employers-value'),
    discountVal = document.getElementsByClassName('discount-value'),
    isOpn = document.getElementsByClassName('isopen-value');

//        Получить все 3 кнопки через Tag
let btns = document.getElementsByTagName('button');
//·        Получить поля категории товаров через класс
let categoryGoods1 = document.querySelector('.goods-item')[0],
    categoryGoods2 = document.querySelector('.goods-item')[1],
    categoryGoods3 = document.querySelector('.goods-item')[2],
    categoryGoods4 = document.querySelector('.goods-item')[3];

//·        Получить поля ввода товаров, времени и расчета бюджета через querySelector
let time = document.querySelector('.time-value');

let budget = document.querySelector('.count-budget-value');

let employersName = document.querySelectorAll('.hire-employers-item');


console.log(employersName)

