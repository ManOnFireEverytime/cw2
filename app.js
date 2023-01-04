var express = require("express");
var app = express();
app.get("/lessons", (req, res) => {
  // Retrieve list of lessons from database or other source
  var lessons = [
    { id: 1, subject: "Math", location: "Room 1", price: 100 },
    { id: 2, subject: "English", location: "Room 2", price: 150 },
    { id: 3, subject: "Physics", location: "Room 3", price: 200 },
    { id: 4, subject: "Anatomy", location: "Room 4", price: 250 },
  ];

  res.json(lessons);
});

app.listen(3000, () => console.log("Server listening on port 3000"));
