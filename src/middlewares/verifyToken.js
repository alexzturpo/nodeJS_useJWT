const verifyToken = (req, res, next)=>{
    console.log('Accediendo al middleware')
    const authorization_header = req.headers['authorization']
    // console.log('authorization_header',authorization_header)
    if(authorization_header !== undefined){
        console.log(authorization_header)
        const token = authorization_header.split(' ')[1]
         req.token = token
         next()
    }else{
        console.log('NO INGRESO EL TOKEN')
    }
    next()
}
exports.verifyToken = verifyToken