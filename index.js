// Import packages
const express = require("express");
// const home = require("./routes/home");

// Middlewares
const app = express();
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Routes
// app.use("/home", home);

app.get("/", async (req, res, next) => {
  return res.status(200).json({
    revenues: "$2,129,430",
    transactions: "1520",
    likes: "9721",
    users: "892",
  });
});

// connection
// const port = process.env.PORT || 9001;
app.listen(3000, () => console.log(`Listening to port ${3000}`));