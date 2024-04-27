import {body, validationResult, check} from 'express-validator'

const validateRegister = [
    check('name').exists().notEmpty().isLength({min:5, max:50}),
    check('age').exists().notEmpty().isNumeric(),
    check('email').exists().notEmpty().isEmail(),
    check('password').exists().notEmpty().isLength({min:6, max:20}),
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

const validateLogin = [
    body('email').exists().notEmpty().isEmail(),
    body('password').exists().notEmpty(),
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
    validateRegister,
    validateLogin
} 