///////// - [ self destruct sequence (countdown from 10 - 1) ]

console.log("Self-destruct in:");

// destruction countdown from 10 - 1
for (countDown = 10; countDown >= 1; countDown--) {
    console.log(countDown + "...");
}

console.log("Your PC was successfully destroyed.")

////////////////////////////////// - [ Remainder operators % ]

/*
console.log(12 % 4) //3
console.log(1024 % 2) //512
*/

///////////////////////////////////// - [ Arrays Information ]

let favShows = ["Schitt's Creek","Rick And Morty","The Good Place"]
console.log(favShows);

let firstshow = favShows[0];
console.log(firstshow); //display first show in array

favShows.push("Solar Opposites") //added new show to beginning of the array
console.log(favShows);

favShows.pop() //removed the added show item from the end of the array
console.log(favShows);

favShows.shift() //removed the first item from array
console.log(favShows);

favShows.unshift("Solar Opposites") //added to the beginning of the array
console.log(favShows);


favShows.forEach((shows, index, favShows) => console.log('Show: ${shows}, Index: ${index}, Array: ${favShows}'));

///////////////////////////////////// - [ Loops Information ]

const firstArray = [];

for (i = 1; i < 10; i += 2) {
    console.log(i);
}

////

const multiArray = [];

for (i = 2; i < 20; i++) {
    multiArray.push(i*3)
}
console.log(multiArray);

////

let output = [];

for (i = 1; i<=7; i++) {
    output.push('#');
    console.log(output.join());
}

/////////////////////////////////////////////////////////////