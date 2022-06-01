const express = require("express");
const chalk = require("chalk");

const app = express();
const port = process.env.PORT || 5000;

//localhost:5000/ that is the meaning of / string
/* app.get("/", (req, res) => {
  res.end("Hello!");
}); */
/* app.get("/about", (req, res) => {  ->> this is how you target it  
  res.end("Hello!");
}); */

//how to end file to HTML
/* app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
}); */

//how to make REST API
app.get("/:id", (req, res) => {
  /* res.json({ key: "wow" }); */
  res.send(req.params.id);
});

app.listen(port, () => {
  console.log(chalk.redBright(`Listening to port: ${port}`));
});

//how to detect the running port
// command is "lsof -i tcp:5000 or the value of the port"
// kill then the node number
