const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const product = require("./routes/product");
const port = process.env.PORT || 3520;

app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: false,
    limit: "50mb",
  })
);
app.use(
  bodyParser.json({
    limit: "50mb",
    extended: true,
  })
);

// ROUTES
app.use("/api/product", product);
app.get("/", (req, res) => {
  mongoose
    .connect(
      "mongodb+srv://hunter:hunt_vk@cluster0-x3aca.mongodb.net/IRS_ECOMMERCE?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    )
    .then(() => {
      console.log("mongo connected!");
      res.send("okay");
    })
    .catch((err) => res.json(err));
});

app.listen(port, () =>
  console.log(`Server is up and running at port : ${port}`)
);
``;
