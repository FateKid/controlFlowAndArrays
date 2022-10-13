///////// - [ self destruct sequence (countdown from 10 - 1) ]

console.log("Self-destruct in:");

// destruction countdown from 10 - 1
for (countDown = 10; countDown >= 1; countDown--) {
    console.log(countDown + "...");
}

////////////////////////////////// - [ Remainder operators % ]

console.log(12 % 4) //3
console.log(1024 % 2) //512

///////////////////////////////////// - [ Arrays Information ]

let favoriteShows = ["Schitt's Creek","Rick And Morty","The Good Place"]
console.log(favoriteShows)

let firstshow = favoriteShows[0];
console.log(firstshow) //display first show in array

favoriteShows.push("Solar Opposites") //added new show to beginning of the array
console.log(favoriteShows)

favoriteShows.pop() //removed the added show item from the end of the array
console.log(favoriteShows)

favoriteShows.shift() //removed the first item from array
console.log(favoriteShows)

favoriteShows.unshift("Solar Opposites") //added to the beginning of the array
console.log(favoriteShows)

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