// 01
var myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString.length);
res = myString.replace(/[, ]+/g, " ").trim();
console.log(res);

// 02
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);

favoriteAnimals.shift();
favoriteAnimals.unshift("blowfish","meerket");
console.log(favoriteAnimals);
// seconnd way
favoriteAnimals.splice(1,0,"lion");
console.log(favoriteAnimals);

console.log('The array has a length of: ' +favoriteAnimals.length);

console.log( 'The item you are looking for is at index: '+favoriteAnimals.indexOf("meerket"));

favoriteAnimals.splice(2,1);
console.log(favoriteAnimals);

// More java script
// 01
function numAdding(x,y,z){
    return x+y+z;

}
console.log(numAdding(4,3,7));

// 02
function colorCar(color){
    return "a "+color+" car";
}
console.log(colorCar("green"));
console.log(colorCar("red"));
console.log(colorCar("black"));

// 03
var myPerson = new Object();
myPerson.firstName = "Hossein";
myPerson.lastName = "Zeiny";
myPerson.age = 34;
myPerson.hairColor= "balck";

console.log(myPerson.firstName+myPerson.lastName+" is"+myPerson.age+" and has"+myPerson.hairColor+" Hair");

