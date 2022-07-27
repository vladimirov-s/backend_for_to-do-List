require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./src/routes/routes");
const app = express();
const urlDB = process.env.urlDB;
const port = process.env.port || 8001;

app.use(cors());
app.use(express.json());
app.use("/", routes);

mongoose.connect(urlDB, { useNewUrlParser: true, useUnifiedTopology: true });
app.listen(port, () => {
  console.info(`server started on port ${port}`);
});
