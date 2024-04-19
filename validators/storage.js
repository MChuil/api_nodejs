import {body, validationResult} from 'express-validator'

const validateCreate = [
    body('image')
        .exists()
        .notEmpty()
        .isLength({min:5, max:100}),
        (req, res, next) =>{
            try{
                validationResult(req).throw()
                return next()
            }catch(err){
                res.status('403')
                res.send({errors : err.array()})
            }
        }
];

export {
    validateCreate
} 