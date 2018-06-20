

function simpleNum(){
for (var i = 1; i <= 100; i++){
	for (var x = 2; x <= i; x++){
		if (i%x == 0){
			
		} else{
			console.log(`Это простое число: {$i}+ оно делиться на 1 и на:  {$x}`)
		}
	}
}
}

simpleNum();