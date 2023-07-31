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