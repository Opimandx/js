var num = 33721;
var mult = 1;
 
for (var i = 1; i<=5; i++){
    mult *= num%10;
    num = Math.floor(num/10);
    
    
}
 
 console.log(mult);