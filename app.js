const express = require("express");
const dotenv = require("dotenv").config();

const app = express();


// Enable body parser 
app.use(express.json())
app.use(express.urlencoded({ extended: false}));


app.use("/openai", require("./routes/openaiRoutes"));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING IN PORT ${PORT}`);
});
