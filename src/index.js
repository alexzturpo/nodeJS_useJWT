const express = require("express")
const app = express()
// const router = express.Router()
const userRouter = require('./routers/rUser') 
require('./connection') // llamando a mi archivo coneccion 
app.set('port',3000)
app.use(express.urlencoded({extended:false})) //especificando que el envio de formulario no este anidado 

app.get('/',(req,res)=>{
    res.send('hola mundo')
    // <h1>hola mundo</h1>
})
app.listen(app.get('port'),()=>{
    console.log(`Aplicacion corriendo en el puerto: ${app.get('port')}`)
})
app.use('/',userRouter)