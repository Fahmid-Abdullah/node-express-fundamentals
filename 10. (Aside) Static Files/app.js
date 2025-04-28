// Recall 2. Http Example where we had to get the files one by one then create routes for them all.
// In express this can be done with just a simple line of code.
// No challenge here, just review how it was done.

const express = require('express');
const app = express();

// Express will automatically handle requests for static resources (like HTML, CSS, JavaScript files) without needing 
// to manually define routes for each file. You just have to provide the directory to the resources.
app.use(express.static('./simple-app'));

// Start the server
app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
  });