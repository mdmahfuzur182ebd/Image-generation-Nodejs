const express = require("express");
const dotenv = require("dotenv").config();

const app = express();



app.use("/openai", require("./routes/openaiRoutes"));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING IN PORT ${PORT}`);
});
