const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
const mongoose = require("mongoose");

const cadastroController =  require('./controllers/cadastros')

app.set("view-engine", "ejs");

app.get("/", (req, res) => {
  res.send("Online");
});

app.get("/cadastros", cadastroController.findCadastros);
app.post("/cadastros", cadastroController.createCadastro);
app.get("/cadastros/:id", cadastroController.findCadastro);
app.patch("/cadastros/:id", cadastroController.updateCadastro);
app.delete("/cadastros/:id", cadastroController.deleteCadastro);

mongoose.connect("mongodb://localhost:27017/wevo", () => {
  console.log("Conectado ao BD");
});

app.listen(3000, () => {
    console.log('Server has Started at Port 3000');
});
