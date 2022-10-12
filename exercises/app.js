console.log("hello world");

/////////////////////////////////////////////////////////////
// NON FUNCTION METHOD - Allowing 18+ content

//Creating age variable with the pre-set value of 18
const allowedAge = 18;

// If the user is within or above the allowed age
if (allowedAge <= 18) {
console.log("Access granted. Welcome aboard!");
}

//If the user is under the allowed age
else {
    console.log("You're too young to access this content.");
}

/////////////////////////////////////////////////////////////
//FUNCTION METHOD - Checking number value

function ageVerification(number) {
    if (number < 0 ) {
        console.log("Negative");
    }
    else if (number > 0 ) {
        console.log("Positive");
    }
    else if (number = 0 ) {
        console.log("Logged 0");
    }
    else {
        console.log("Entered a non-numerical value");
    }
}
/////////////////////////////////////////////////////////////
//CALLING THE NUMBER VALUE FUNCTION

ageVerification(5);
ageVerification(10);
ageVerification("String");