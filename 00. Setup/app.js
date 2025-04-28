// This is a test program to check your setup.
// Run `node app.js` for the initial test.
// Then after setting up nodemon, run `npm start`.
// If both produce the same output, you are set.

let i = 3;

const testInterval = setInterval(() => {
    if (i < 1) {
        console.log("Working!");
        clearInterval(testInterval); // Stops the interval after printing "Working!"
    } else {
        console.log(i); // Prints the countdown
        i--; // Decreases the counter
    }
}, 500); // Interval of 500ms
