const express = require("express")
const colors = require("colors")
const dotenv = require("dotenv")
const morgan = require("morgan")
const connectDB = require('./config/db')
const connectdb = require('./connect/connect')
const authRoutes = require("./routes/authroute")
const categoryRoutes = require("./routes/categoryRoute")
const productRoutes = require("./routes/productRoute")
const cors = require("cors")


//configure env
dotenv.config();

//databse config
// connectdb();
connectDB();

//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// //rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgGreen
      .black
  );
});