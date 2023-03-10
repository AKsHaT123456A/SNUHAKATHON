//jshint esversion:6
const express = require("express");
const path =require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoute = require("./Routes/authRoutes");
const cityRoutes = require("./Routes/cityRoutes");
const warehouseRoute = require("./Routes/warehouseRoute");
const countryRoute = require("./Routes/countryRoutes");
const ShipmentRoute = require("./Routes/ShipmentRoute");
mongoose.set("strictQuery", true);
require("dotenv").config();
const app = express();
app.use(express.json());
const PORT = 3000 || process.env.PORT;
mongoose
  .connect(process.env.DATABASE_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));
app.use("/api/auth", authRoute);
app.use("/api/country", cityRoutes);
app.use("/api/business",warehouseRoute);
app.use("/api",countryRoute);
app.use("/api",ShipmentRoute);
app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
