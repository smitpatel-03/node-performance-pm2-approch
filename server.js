const express = require("express");
const app = express();

function delay(duration) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {
    // here where event loop blocked
    // when we call the different routes at the same time (any route on the server like / or /timer or /anything)
    // we face increase in time because event loop is still executing
    // so we have to use other threads that are present in the system
  }
}

app.get("/", (req, res) => {
  res.send(`Performance Example ${process.pid}`); // get id of current process in operating system
});

app.get("/timer", (req, res) => {
  delay(4000);
  res.send(`timer that takes time ${process.pid}`);
});

// code for all process are same

//we don't have to specify the cluster that app are using pm2 do that for us
app.listen(3000);

//pm2

// for starting = pm2 start server.js
// we can also use other commands when server is running in background
// current status of our server => pm2 list
// for stop => pm2 stop
// for delete => pm2 delete
// for usinga all cores => pm2 start server.js -i max or number of instances we want to use 
// for log => pm2 logs or pm2 logs --(last lines like last 200 lines)