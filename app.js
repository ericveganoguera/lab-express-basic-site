const express = require("express");

const app = express();

// Make everything inside of public/ available
app.use(express.static("public"));

// app.get(path, code);

//Route for homepage
app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/home.html");
});

//Route for about page
app.get("/about", (request, response, next) => {
    response.sendFile(__dirname + "/views/about.html");
})

//Route for works page
app.get("/works", (request, response, next) => {
    response.sendFile(__dirname + "/views/works.html");
})

//Route for photo gallery page
app.get("/gallery", (request, response, next) => {
    response.sendFile(__dirname + "/views/photo-gallery.html");
})

app.listen(3001, () => {
  console.log("server listening on port 3001");
});
