// These JS exercises will go over logical operators AND and OR (&& and ||)

// let hasCompletedCourse = true
// let givesCertificate = true

// // note the double ampersands; denotes the and operator, and concs the line.
// if (hasCompletedCourse && givesCertificate === true) {
//         generateCertificate()
// }

// function generateCertificate() {
//     console.log("Generating certificate....")
// }

// // lets go over a challenge using the logical "AND" operator (which is the double ampersands)

// let hasSolvedChallenge = false
// let hasHintsLeft = false

// // Create an if statement that checks that both variables are false.
// // If so, run the showSolution() function

// if (SolvedChallenge && hasHintsLeft === false) {
//     showSolution()
// }

// function showSolution() {
//     console.log("showing the solution...")
// }

// Now for the "OR" operator. The OR logical operator is denoted as a double ||

// Create two boolean variables, likesDocumentaries and likesStartups
// Use an OR statement (||) to call recommendMovie() if either of those variables are true

let likesDocumentaries = true
let likesStartups = true

if (likesDocumentaries || likesStartups === true) {
    recommendMovie()
}

function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}
