# Setting Up Node and Express

## Follow these steps to setup node, nodemon, and express.
### Installing Node
#### Step 1: Install Node
Make sure you have Node.js installed. You can download it from [Node.js](https://nodejs.org/en).
#### Step 2: Make sure you are in the 0. Setup directory on your IDE terminal.
#### Step 3: Run the following command:
 ```bash
node app.js
 ```
#### If you see the console logs, you are set.

### Setting up Nodemon
#### Step 1: Once you have node setup, run the following command in terminal:
 ```bash
npm install --save-dev nodemon
 ```
#### Step 2: Go to the package.json folder and add the following:
```bash
"scripts": {
  "start": "nodemon app.js"
}
 ```
#### Step 3: If you have done it correctly, running the following command will have the same console logs as last time:
 ```bash
npm start
 ```
#### If you see the console logs, you are set.
### Setting up Express
 ```bash
npm install express
 ```
#### And that's it. For the rest of the directories, make sure you run the following command before starting the lesson to make sure everything is up to date:
 ```bash
npm install
 ```