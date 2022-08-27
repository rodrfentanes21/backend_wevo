const Cadastro = require("../models/Cadastro");

exports.findCadastros = async (req, res) => {
  const cadastros = await Cadastro.find();
  res.send({ data: cadastros });
};

exports.createCadastro = async (req, res) => {
  const cadastro = new Cadastro(req.body);
  await cadastro.save();
  res.send({ data: cadastro });
};

exports.findCadastro = async (req, res) => {
  try {
    const cadastro = await Cadastro.findById(req.params.id);
    res.send({ data: cadastro });
  } catch {
    res.status(404).res.send({ error: "Cadastro não encontrado" });
  }
};


exports.updateCadastro = async (req, res) => {
  try {
    const cadastro = await Cadastro.findById(req.params.id);
    Object.assign(cadastro, req.body);
    cadastro.save();
    res.send({ data: cadastro });
  } catch {
    res.status(404).res.send({ error: "Cadastro não encontrado" });
  }
};

exports.deleteCadastro = async (req, res) => {
  try {
    const cadastro = await Cadastro.findById(req.params.id);
    await cadastro.remove();
    res.send({ data: true });
  } catch {
    res.status(404).res.send({ error: "Cadastro não encontrado" });
  }
};
