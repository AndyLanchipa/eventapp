const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const app = express();
const routes = require("./routes/routes");
const cors = require("cors");

const PORT = process.env.PORT || 3000; //backend routing port

//db
mongoose.connect(process.env.DB_URI, () => {
  console.log("db connected");
});
app.use(express.json());
app.use(cors());
app.use("/api/v1", routes);
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
