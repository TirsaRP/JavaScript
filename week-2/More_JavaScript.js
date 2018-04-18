// 1.create a function that takes 3 arguments and returns the sum of thos arguments
function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}
console.log(sum(2, 3, 5));
console.log(sum(4, 7, 9));

// 2.create a function named colorCar that receives a color, and prints out, 'a red car' for example.
function colorCar(color) {
    return "a " + color + " car";
}
console.log(colorCar("red"));
console.log(colorCar("blue"));

// 3.create an object and function that takes the object as a parameter and prints out its properties and values.
let objMe = {
    firstName: 'Rosa',
    lastName: 'Pedersen',
    age: '32',
    gender: 'female'
};
console.log(objMe.firstName);     //dot notation returns value of property firstName
console.log(objMe['lastName']);   //bracket notation returns value of property lastName

function printObject() {

    for (let propName in objMe) {
        let propValue = objMe[propName]
        console.log(propName + ": " + propValue);
    }
}
printObject();

Object.getOwnPropertyNames(objMe).forEach(  //Correct Answer
    function (val, idx, array) {
        console.log(val + ': ' + objMe[val]);
    }
);

// 4. create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike.
// and prints 'a blue motorbike' for example when called as vehicleType ('blue',2)

let code1 = 'car';
let code2 = 'motorbike';

function vehicleType1(color, code) {
    console.log("a " + color + " " + code);
}
vehicleType1('blue', code1);
vehicleType1('red', code2);

//second way to solve question 4. 
let objCode = {
    1: 'car',
    2: 'motorbike'
};

function vehicleType2(color, code) {
    console.log("a " + color + " " + objCode[code]);
}
vehicleType2('blue', 1);
vehicleType2('red', 2);

// 5. Can you write the following without the if statement, but with just as a single line with console.log(...);?

if (3 === 3) {
    console.log("yes")
} else {
    console.log("no")
}
//answer:yes! using a conditional (ternary) operator syntax:condition? expr1 : expr2 
console.log(3 === 3 ? "yes" : "no");

// 6. Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'

function vehicle3(color, code, age) {
    if (code === 1) {
        code = "car";
    }
    if (code === 2) {
        code = "motorbike";
    }

    if (age > 1)
        console.log("a " + color + " " + "used" + " " + code);
    else
        console.log("a " + color + " " + "new" + " " + code);
}
vehicle3("blue", 1, 5);
vehicle3("green", 2, 1);
vehicle3("red", 1, 3);
vehicle3("black", 2, 0);


arr = [{ id: 1, brand: "BMW" }, { id: 2, brand: "Ford" }, { id: 3, brand: "Toyota" }];
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//extra practice for myself
function getCar(id) {                       //this function logs each object on seperate lines, until it has passed through each index
    for (i = 0; i < arr.length; i++) {              //for how ever long the arr.length is 
        if (id === arr[i].id)
            console.log(arr[i].brand);
    }

}

getCar(1);   //gets value "BMW"
getCar(2);   //gets value "Ford"
getCar(3);   //gets value "Toyota"


// 7. Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.

vehicleArray = ["motorbike", "caravan", "truck", "bike", "car"];

// 8. How do you get the third element from that list?

console.log(vehicleArray[2]);

// 9. Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".
function vehicle2(color, i, age) {
    if (age > 1)
        console.log("a " + color + " " + "used" + " " + vehicleArray[i]);
    else
        console.log("a " + color + " " + "new" + " " + vehicleArray[i]);
}
vehicle2("green", 3, 1);
vehicle2("red", 1, 2)

// 10.Use the list of vehicles to write an advertisement. So that it prints something like: 
// "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes."
/*
a = [1,3,4,5,6,6]
b = [3,5,6]
 
a[4]    a.length-2      //4
b[1]  b[b.length-2]  //1   
*/

vehicleArray = ["motorbike", "caravan", "truck", "bike", "car"];
function services(vehicleArray) {
    let message = "Amazing Joe's Garage, we service ";

    for (let i = 0, len = vehicleArray.length; i < len - 2; i++) {
        message += vehicleArray[i] + "s, ";
    }
        message += vehicleArray[vehicleArray.length-2] + "s and " + vehicleArray[vehicleArray.length-1] + "s.";
   
    console.log(message); //Amazing Joe's Garage, we service motorbikes, caravans, trucks, bikes, and 
}

services(vehicleArray);

//console.log("Amazing Joe's Garage, we service "+ vehicleArray[0]+"s, " + vehicleArray[1]+"s, "+vehicleArray[2]+"s, "+vehicleArray[3]+"s, "+"and "+vehicleArray[4]+"s." )
//console.log("Amazing Joe's Garage, we service " + vehicleArray.join('s, ')+ 's.');

// 11. What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?
vehicleArray = ["motorbike", "caravan", "truck", "bike", "car", "unicycle", "lorry"];

services(vehicleArray);

// 12. Create an empty object.

emptyObj = {};

// 13. Create an object that contains the teachers that you have had so far for the different modules.
// 14. Add a property to the object you just created that contains the languages that they have taught you.
teacherObj = {
    HTML_CSS: 'Victor',
    HTML_CSS: 'Tommy',
    JavaScript: 'Shamrat',
    JavaScript: 'Wojtek',
    JavaScript: 'Mike'
};

// 15. Write some code to test two arrays for equality using == and ===. Test the following:

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
//What do you think will happen with x == y, x === y and z == y and z == x? Prove it!

if (x == y) {                                       //not the same       *why is it not the same?
    console.log("same");
} else {
    console.log("not the same");
}

console.log(x === y ? "same" : "not the same");           //not the same   * why is it not the same?  because of the === (strict)?

console.log(z == y ? "same" : "not the same");            //same

console.log(z == x ? "same" : "not the same");            //not the same?

// 16. Take a look at the following code:

let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;
// Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).
o1 = { foo: 'dog' };
console.log(o1);        //{foo: 'dog'}
o2 = { foo: 'cat' };
console.log(o2);        //{foo: 'cat'}
o3 = o2;
console.log(o3);        //{foo: 'cat'}

console.log(o2 == o3 ? "changes o3" : "does not change o3");
console.log(o1 == o3 ? "changes o3" : "does not change o3");

// Does the order that you assign (o3 = o2 or o2 = o3) matter?  -NO.

o1 = { foo: 'dog' };
console.log(o1);        //{foo: 'dog'}
o2 = o3;
console.log(o2);        //{foo: 'cat'}
o2 = { foo: 'cat' };
console.log(o2);        //{foo: 'cat'}                                
o3 = o2;
console.log(o3);        //{foo: 'cat'}

console.log(o3 == o2 ? "changes o3" : "does not change o3");        //both change o3
console.log(o2 == o3 ? "changes o3" : "does not change o3");        //both change o3

// 17. What does the following code return? (And why?)   -number?

let bar = 42;
typeof typeof bar

console.log(typeof typeof bar);     //logs string 
console.log(bar);                   //logs  42. 
console.log(typeof bar);            //logs number

