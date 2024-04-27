import {body, validationResult} from 'express-validator'

const validateCreate = [
    body('file')
        .exists()
        .notEmpty(),
        (req, res, next) =>{
            try{
                validationResult(req).throw()
                return next()
            }catch(err){
                res.status(403)
                res.send({errors : err.array()})
            }
        }
];

export {
    validateCreate
} 