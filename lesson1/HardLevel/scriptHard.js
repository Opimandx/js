var num = 33721;
var mult = 1;
var double = 2;
for (var i = 1; i<=5; i++){
    mult *= num%10;
    num = Math.floor(num/10);
    
    
}
 
 console.log(mult);   //результат умножения

 var powResult = mult**double;  //результат возведения в степень

 console.log(powResult);

 console.log(Math.floor(powResult/1000))  // отрубаем первые две 