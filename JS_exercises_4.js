//         START           FINISH       STEP SIZE
// for ( let count = 1;  count < 11;  count += 1 )  {
    
//     console.log(count)

// }

// ----------------------------------------------------------------------------------

let cards = [7, 3, 9]

// Create a for loop that logs out all the cards in the array
// Use cards.length to specify how long the loop should run

for (let i = 0; i < cards.length; i += 1) {
    
}

// ----------------------------------------------------------------------------------

let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately.",
    "Same here!",
    "Great to hear",
    "🙌"
]

// tangent
DRY - Don't repeat yourself
console.log(messages[0])
console.log(messages[1])
console.log(messages[2])
console.log(messages[3])

// a way using for loops and arrays to console log out our array.
for (let i = 0; i < messages.length; i += 1) {
    console.log(messages[i])
}

// ----------------------------------------------------------------------------------

let cards = [7, 3, 9]

// Create a for loop that logs out all the cards in the array
// Use cards.length to specify how long the loop should run

for (let i = 0; i < cards.length; i++) {
    console.log(cards[i])
}
