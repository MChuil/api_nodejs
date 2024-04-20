

const apiAuth = (req, res, next) =>{
    try {
        const { token } = req.headers
        // const token = req.headers.token
        if(token === 'apikey-valido-1234'){
            next()
        }else{
            res.status('401')
            res.send({ error: 'No esta autorizado...'})
        }
    } catch (error) {
        res.status('403')
        res.send({ error: 'Ocurrio un error en el Headers...'})
    }
}

export{
    apiAuth
}