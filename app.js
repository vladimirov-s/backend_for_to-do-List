const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const apiRoutes = require("./src/modules/routes/routes");
const app = express();

app.use(cors());
app.use(express.json())
app.use("/", apiRoutes);

const url = "mongodb+srv://user:user@cluster0.3cdgy.mongodb.net/Task-js?retryWrites=true&w=majority";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(8000, () => {
  console.log("listen");
});
