require("dotenv").config();
const express = require("express");
const massive = require("massive");
const ctrl = require("./controller");

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING)
  .then(dbObject => {
    app.set("db", dbObject);
  })
  .catch(err => console.log(err));

app.use(express.json());

//ENDPOINTS
app.get("/api/inventory", ctrl.getInventory);
app.post("/api/product", ctrl.createProduct);
app.delete("/api/product/:id", ctrl.deleteProduct);
app.get("/api/inventory/:id", ctrl.getOne);
app.put("/api/product/:id", ctrl.updateProduct);

app.listen(SERVER_PORT, () => {
  console.log(`Listening on port ${SERVER_PORT}.`);
});
