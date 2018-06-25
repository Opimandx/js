// Используя только файл скрипта выполнить такие действия:








// ·        Восстановить порядок в меню, добавить пятый пункт

let menu = document.getElementsByClassName("menu")[0];
let menuItem = document.getElementsByClassName("menu-item");
menu.insertBefore(menuItem[1], menuItem[3]);
// ·        Заменить картинку заднего фона на другую из папки img

document.body.style.background = 'url("img/apple_true.jpg")';


let menuLi = document.createElement('li');

let text = document.createTextNode("Пятый пункт");

menuLi.appendChild(text);

menuLi.classList.add("menu-item");

menu.appendChild(menuLi);

// ·        Поменять заголовок, добавить слово "подлинную"

let title = document.getElementById("title");

title.innerHTML = "Мы продаем только подлинную технику Apple"

// ·        Удалить рекламу со страницы

let adv = document.querySelector('.adv');

let column = document.getElementsByClassName('column')[1];

column.removeChild(adv);
// ·        Спросить у пользователя отношение к технике apple и записать ответ в поле "prompt"

let reason = prompt('Ваше отношение к технике Apple?', "С пивом пойдет");


console.log(reason);