const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://guizaodozap:gui123456@cluster0.wx08a.mongodb.net/receitas?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.on("Error", () => console.error("Error with connection"));
db.once("open", () => {
  console.log("Connected with mongodb atlas");
});

module.exports = db;
