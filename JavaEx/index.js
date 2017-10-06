var buffetprice = function(age){
    var price = 0;

    if (age < 10){
        price = 20;
    } else if ((age >=10) && (age <21)){
        price = 30;
    } else
        price = 40;
    return (price);
}
console.log("age = 9: $" + buffetprice(9));
console.log("age = 10: $" + buffetprice(10));
console.log("age = 22: $" + buffetprice(22));

var buffetprice = function(age){

    if (age < 10){
        return (20);
    } else if ((age >=10) && (age <21)){
        return (30);
    } return (40);
}
console.log("age = 9: $" + buffetprice(9));
console.log("age = 10: $" + buffetprice(10));
console.log("age = 22: $" + buffetprice(22));