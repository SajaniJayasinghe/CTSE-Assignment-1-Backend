const express = require("express");
const cors = require("cors");
const { connection } = require("./utils/connection");
const dotenv = require("dotenv");

//@import router
const SampleRouter = require("./routes/sample.route");
const UserRouter = require("./routes/user");
const PlaceRouter = require("./routes/places");
const HotelRouter = require("./routes/hotels");

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

//use routes
app.use("/api/sample/", SampleRouter);
app.use("/api/user", UserRouter);
app.use("/api/places", PlaceRouter);
app.use("/api/hotels", HotelRouter);

app.listen(PORT, () => {
  console.log(`Server is up and running on port number: ${PORT}`);
  connection();
});
