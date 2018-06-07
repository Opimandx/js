

var week = ["Понедельник", 'Вторник', "Среда", "Четверг", "Пятница", "Суббота", 'Воскресенье'];

for (var i = 0; i < week.length; i++){
    document.write(week[i]+" ");
}



for (var i = 0; i < week.length; i++){
    document.write(week[i]+"<br>");
}




for (var i = 0; i < week.length; i++){
    
    if (i == 5 || i == 6){
        document.write("<strong>"+week[i]+"<strong><br>");
    } else {
        document.write(week[i]+"<br>");
    }
}

var date = new Date();
var day = date.getDay()-1;
console.log(day);


for (var i = 0; i < week.length; i++){
    if(day === i){
         
        document.write("<strong>"+week[day]+ "</strong><br>");
    } else{
        document.write(week[i]+"<br>");
    }
}














