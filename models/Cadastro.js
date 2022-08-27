const mongoose = require('mongoose')
//Inicialmente, eu tinha colocado um ID, mas o mogoDB com as ferramentas utilizadas gera um automaticamente então eu removi.
const schema = new mongoose.Schema({
    nome: String,
    cpf: String,
    email: String,
    telefone: String,
    sexo: String,
    birth: String
});

module.exports = mongoose.model("Cadastro", schema);