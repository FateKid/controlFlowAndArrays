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