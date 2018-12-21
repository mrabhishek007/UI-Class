// Create two variables and display their sum
var a =10;
var b = 20;
var sum = a+b;
console.log(sum);

// Find the biggest value between 2 numbers
var p =50;
var q = 30;
p>q ? console.log(`${a} is greatest`) : console.log(`${b} is greatest`);

// Find the biggest value among 3 numbers
var x = 20;
var y = 50;
var z = 60;

if(x>y && x>z){
    console.log(`${x} is greatest`);
}else if(y>z){
    console.log(`${y} is greatest`)
}else{
    console.log(`${z} is greatest`)
}


                //OR

if(x>y){
    if(x>z){
        console.log(`${x} is greatest`);
    }else{
        console.log(`${z} is greatest`)
    }
}else{
    if(y>z){
        console.log(`${y} is greatest`)
    }else{
        console.log(`${z} is greatest`)
    }
}


                //OR   ( Ternary operator )

x>y  ? ( (x>z)  ? console.log(`${x} is greatest`) : console.log(`${z} is greatest`) ) : ( (y>z) ? console.log(`${y} is greatest`) : console.log(`${z} is greatest`) );


