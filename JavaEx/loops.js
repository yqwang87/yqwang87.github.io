for (var i = 0; i < 10; i++){
    console.log("i = " + i);
}

var mul = function(n, m){
    return(n * m);
}

for (var i = 1; i < 13; i++){
    console.log(i + " * 3 = " + mul (i));
}

for (var outer = 2; outer < 13; outer++){
    for(var inner = 1; inner < 13; inner++){
        /*console.log(outer + (" * ") + inner + " = " + mul(outer, inner));*/
        console.log("%d * %d = %d", outer, inner, mul(outer, inner));
    }
}

for (var outer = 2; outer < 13; outer++){
	console.info("\nMultiplication table: %d", outer)
    for(var inner = 1; inner < 13; inner++){
        console.log("%d * %d = %d", outer, inner, mul(outer, inner));
    }
}