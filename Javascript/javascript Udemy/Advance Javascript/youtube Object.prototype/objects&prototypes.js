var bicycle1 = createBicycle('Avon',20, 5);
var bicycle2 = createBicycle('Hero',26, 7);

function createBicycle(name, speed, gear) {
    var newBicycle = {};
    newBicycle.name = name;
    newBicycle.speed = speed;
    newBicycle.gear = gear;
    return newBicycle;
}
//function meant to be called in constructor mode
function BicycleConstructer(name, speed, gear) {
    // var this = {};
    this.name = name;
    this.speed = speed;
    this.gear = gear;
    //return this;

}

var bicycle3 = new BicycleConstructer('Honda',20, 5);  //enables constrctor mode if new keyword is used

