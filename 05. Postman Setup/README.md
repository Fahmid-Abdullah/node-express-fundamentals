# Setting Up Postman

## Follow these steps to setup postman for the rest of the lessons.
#### Step 1: Start up app.js: 
 ```bash
npm start // run npm install first if needed
 ```
#### Step 2: Install Postman
Make sure you have Postman installed. You can download it from [Postman](https://www.postman.com/downloads/).
#### Step 3: Once you have downloaded and installed it. Open it up.
#### Step 3: Create a new session and set it to HTTP.
#### Step 5: For testing purposes, there are 2 GET methods already implemented. On postman set the request type to GET, and enter the following URL and send:
 ```bash
http://localhost:5000/users
 ```
#### Step 6: If you got a response of all the users, you are set. If not, troubleshoot by checking request type, URL, as well as if your app.js is running.
#### Step 7: Now test out the other URL and send:
 ```bash
http://localhost:5000/items
 ```
##### If both requests responded with proper responses, you are set to continue to the rest of the lessons.