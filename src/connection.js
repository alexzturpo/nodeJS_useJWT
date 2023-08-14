//COMANDOS 
//INICIAR MONGODB -> brew services start mongodb-community
//FINALIZAR MONGODB -> brew services stop mongodb-community
const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/jwtdb'
const connection = mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true})
.then((db) =>{ console.log(`Conexion exitosa`) })
.catch((err) =>{  console.log(`Ocurrio un error ${err}`) })
module.exports = connection 