// Используя только файл скрипта выполнить такие действия:

// ·        Восстановить порядок в меню, добавить пятый пункт

// ·        Заменить картинку заднего фона на другую из папки img

// ·        Поменять заголовок, добавить слово "подлинную"

// ·        Удалить рекламу со страницы

// ·        Спросить у пользователя отношение к технике apple и записать ответ в поле "prompt"




let menu = document.getElementsByClassName("menu")[0];
let menuItem = document.getElementsByClassName("menu-item");
menu.insertBefore(menuItem[1], menuItem[3]);

document.body.style.background = 'url("img/apple_true.jpg")';

 
let menuLi = document.createElement('li');

let text = document.createTextNode("Пятый пункт");

menuLi.appendChild(text);

menuLi.classList.add("menu-item");

menu.appendChild(menuLi);


let title = document.getElementById("title");

title.innerHTML = "Мы продаем только подлинную технику Apple"


let adv = document.querySelector('.adv');

let column = document.getElementsByClassName('column')[1];

 column.removeChild(adv);

 let reason = prompt('Ваше отношение к технике Apple?', "С пивом пойдет");


 console.log(reason);