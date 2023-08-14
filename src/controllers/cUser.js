const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt') 
const User = require('../models/mUser')

const getAdmin = (req,res)=>{
    jwt.verify(req.token, 'secret-key', (err,data)=>{
        if(err){
            res.send('OCURRIO UN ERROR')
        }else{
            res.json({
                message: 'Ok, Datos correctos',
                data: data
            })
        }
    })
    res.send('Bienvenido')
}
const login = (req,res)=>{
    // console.log('req.body',req.body)
    let obj = {email:req.body.email}
    User.findOne(obj)
    .then( ok => {
        console.log('RESPUESTA: ',ok)
        if(ok){ 
            if(bcrypt.compareSync(req.body.password, ok.password)){
                // res.send('USUARIO ENCONTRADO')
                jwt.sign({user:ok}, 'secret-key', (er,token)=>{
                    res.send({token: token})
                })
            }else{
                res.send('USUARIO INCORRECTO') 
            }
        }else{
            res.send('USUARIO NO ENCONTRADO') 
        }
    })
    .catch( err => { res.send('ERRO'.err)})

}
const register = (req,res)=>{
    console.log('gggg')
    let user = new User({
        name : req.body.name,
        email : req.body.email,
        password : bcrypt.hashSync(req.body.password, 10)
    })
    // res.send(user)
    user.save()
    .then(ok =>{
        res.send('usuario registrado')
    })
    .catch(er =>{
        res.send('Error para registrarlo')
    })
}
module.exports = {getAdmin,login,register}