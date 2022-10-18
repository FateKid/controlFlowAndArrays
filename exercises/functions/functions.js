///////////////////////////////////// - [ Delcaring a function ]

function one() {
    return 'one'
}

console.log(one()); //calling the one function

//function expression
const two = () => {
    return 2;
}

console.log(two());

//current profile information
const profileInfo = {
    name: 'Charles',
    lastName: 'Knapp',
    occupation: 'DevSecOps',
    currentAge: 23,
    isAdult: true
}

const increaseAge = (person) => {
    //dot notation
    person.currentAge += 1;
    console.log(`Hooray! It's your ${person.currentAge} birthday`);
}

//calling this function
increaseAge(profileInfo);

////////////////////////////////////////////////////////////////

function areBothEven(n1, n2) {
    return !(n1 % n2) && !(n2 % 2);
}
console.log*(areBothEven(3, 7));

//let maria = getDevObject("Maria","HTML","CSS","JavaScript")

let maria2 = {
    name: "Maria",
    skills: []
}

//////////////////////////////////////- [ Function with 1 param ]

const sayName = (name) => {
    //console.log("Hello, my name is " + name); //concatitnation
    console.log (`Hello, my name is ${name}`) //direct injection
}

sayName("Kadija")


//Calcuating the area of a circle
const calcAreaOfCircle = () => {
    let promptRadius = prompt("What is the radius of your circle? \t");

    let circleArea = Math.PI * promptRadius * promptRadius;
    console.log("The area of this circle is " + circleArea)
}

calcAreaOfCircle();


////////////////////////////////////////////////////////////////

