//creation of objects , adding properties ,  retrieval
var fridge = {} ;
fridge.eggs = 20;
fridge.fruits = 40;
fridge.milk = 5;
console.log(fridge);
console.log(`Eggs : ${fridge.eggs}`);
console.log(`Milk : ${fridge.milk}`);
console.log(`Fruits : ${fridge.fruits}`);


//declaring Object Literals
var mobile = {
    color: 'Black',
    brand: 'Google',
    model: 'pixel',
    ram: '4GB',
    capacity: '128GB',
};
console.log(mobile);

//Access existing properties
console.log(`Model : ${mobile.model}`);

//Access Non Existing Properties
console.log(`inStock : ${mobile.inStock}`);  //undefined

// Usage of Dot and [] notations
console.log(`Ram : ${mobile.ram}`); // . notation
console.log(`Ram : ${mobile['ram']}`); // [] notation

// use of [] notation where dot is not used for invalid identifiers

// use of [] notation for accessing dynamic properties
var prop = 'color';
console.log('Mobile Property : '+ mobile[prop]); //black

prop = 'capacity';
console.log('Mobile Property : '+ mobile[prop]); // 128GB


// nested Objects creation and Retrieval
var car = {
    model: 'Benz',
    color: 'white',
    year: 2018,
    features: {
        airbags: true,
        forLamps: true,
        autoDriving: false
    }
}
console.log(car);

// Add some properties to nested object and access them

console.log('Car AutoDriving : ' + car.features.autoDriving);

// deleting a property from an object

delete car.features.forLamps ;
console.log('Car Forlamps : ' + car['features']['forLamps']);   //undefined


// === operator demo for objects (if pointing to same location in memory)
