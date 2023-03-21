const express = require("express");
const cors = require("cors");
const { connection } = require("./utils/connection");
const dotenv = require("dotenv");

//@import router
const UserRouter = require("./routes/user");
const PlaceRouter = require("./routes/places");
const BlogRouter = require("./routes/blogs");

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

//use routes
app.use("/api/user", UserRouter);
app.use("/api/places", PlaceRouter);
app.use("/api/blog", BlogRouter);

app.listen(PORT, () => {
  console.log(`Server is up and running on port number: ${PORT}`);
  connection();
});
