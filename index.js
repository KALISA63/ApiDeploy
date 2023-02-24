const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const multer = require("multer");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const catRoute = require("./routes/cats");
const router = require("./routes/users");
const bodyParser = require('body-parser');
const swaggerUi=require('swagger-ui-express');
const swaggerJSDoc= require("swagger-jsdoc");
const swagDocs=require('./SwagDocs/swagFile');


dotenv.config();
app.use(express.json()); //allow to send json body into the object
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.CONNECTION)
  .then(console.log("DB connected"))
  .catch((err) => console.log(err));


  app.use(bodyParser.json())
app.listen("9000", () => {
  console.log("KALISA Jacques");
});

app.get("/", (req, res) => {
  res.send("KALISA Jacques");
});

app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/cats", catRoute);
swagDocs(app);