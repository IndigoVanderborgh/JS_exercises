// // for loops, arrays, DOM

// let sentence = ["Hello ", "my ", "name ", "is ", "Per"] 
// let greetingEl = document.getElementById("greeting-el")

// // Render the sentence in the greetingEl paragraph using a for loop and .textContent
// // in the html, we have greeting-el as an id in a paragraph annotation

// for (let i = 1; i < sentence.length; i++) {
//     // greetingEl.textContent = sentence[i] // This is incorrect
//     //  it will only load "Per" as it clears each index position ie [Hello => my => name etc]
//     // so instead we use += instead of =. This will make each index add next to each other
//     // instead of clearing its previous entry. 

//     // another note; see below for the anatomy of the line of code so it makes sense
//     // greetingEl.textContent ==> finds greetingEl (node) in the doc (html), bridging the two
//     //  += ==> adds increment
//     // sentence[i] ==> sentence variable with array i which indexes tied to sentence length,
//     // and the sentence part stated in line 3.

//     greetingEl.textContent += sentence[i]
// }

// another way

let sentence = ["Hello", "my", "name", "is", "Per"] 
let greetingEl = document.getElementById("greeting-el")

// How do you keep the spaces between the words if I remove them from the array?
// we will remove the space at the end of each string in line 26, and add the space in line 32
for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " "
}

// for (let i = 0; i < 6; i += 1) {
//     console.log(i)
// }

// Create a for loop that counts from 10 to 100 in steps of 10
// Use console.log to log out the numbers

for (let i = 10; i < 101; i += 10) {
    console.log(i)
}
// end of arrays for now, moving to return
// returning values in functions
let player1Time = 102
let player2Time = 107

function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time
    }
}

// we are going to make this the result of invoking the above function
// fastestRace is made up here to console log the function. 
// the value of fastestRace will be whatever the function will return, in which case
// it would be player1Time

// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)

// Write a function that returns the total race time
function getTotalRaceTime {
    return player1Time + player2Time
}

let totalTime = getTotalRaceTime()

console.log(totalTime)

// Call/invoke the function and store the returned value in a new variable

// Finally, log the variable out