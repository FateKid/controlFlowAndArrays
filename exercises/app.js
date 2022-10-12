/////////////////////////////////////////////////////////////
// NON FUNCTION METHOD - Allowing 18+ content

/*

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
*/

/////////////////////////////////////////////////////////////
//FUNCTION METHOD - Checking number value

/*
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
*/

/////////////////////////////////////////////////////////////
//CALLING THE NUMBER VALUE FUNCTION

/*
ageVerification(5);
ageVerification(10);
ageVerification("String");
*/

/////////////////////////////////////////////////////////////
//NESTED IF/ELSE STATEMENTS

//declaring the grade
let currentGrade = 100;

/////////////////////////////////////////////////////////////
//checking for positive & A+
if (currentGrade >= 95) {
    console.log("Your grade, " + currentGrade + ", was an A+!");
}
//checking for positive & A
if (currentGrade >= 90 && currentGrade <= 94) {
    console.log("Your grade, " + currentGrade + ", was an A!");
}
//checking for positive & B+
if (currentGrade >= 84 && currentGrade <= 89) {
    console.log("Your grade, " + currentGrade + ", was an B+!");
}
//checking for positive & B
if (currentGrade >= 80 && currentGrade <= 83) {
    console.log("Your grade, " + currentGrade + ", was an B+!");
}
//checking for positive & C+
if (currentGrade >= 74 && currentGrade <= 79) {
    console.log("Your grade, " + currentGrade + ", was an C+!");
}
//checking for positive & C
if (currentGrade >= 70 && currentGrade <= 73) {
    console.log("Your grade, " + currentGrade + ", was an C!");
}
//checking for failing grades
if (currentGrade >= 1 && currentGrade <= 69) {
    console.log("Your grade, " + currentGrade + ", was a failing grade!");
}

/////////////////////////////////////////////////////////////
//checking for grade 0, or incomplete
if (currentGrade === 0) {
    console.log("Did you complete this assignment? No grade recorded");
}

/////////////////////////////////////////////////////////////
//checking for positive grades
if (currentGrade >= 1) {
    console.log("You received a positive score!");
}
//checking for negative grades
if (currentGrade < 0) {
    console.log("Uh oh! You received a negative score! Contact your instructor for more information.");
}