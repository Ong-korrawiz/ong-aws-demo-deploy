const express = require("express");
const bodyParser = require("body-parser");
const productRoutes = require("./productRoutes"); // import product routes module
const registerRotes = require("./registerRotes")
const { router: authRoutes, verifyToken } = require("./authRoutes")

const app = express();
app.use(bodyParser.json());

const port = 3000;

app.use("/products", verifyToken, productRoutes); // Use product routes
app.use("/registers", registerRotes);
app.use("/login", authRoutes)

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});