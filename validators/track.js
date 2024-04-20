import {body, validationResult, check} from 'express-validator'

const validateCreateTrack = [
    body('name').exists().notEmpty().isLength({min:2}),
    body('album').exists().notEmpty(),
    body('cover').exists().notEmpty().isLength({min:2}),
    body('artist').exists().notEmpty(),
    body('artist.name').exists().notEmpty().isLength({min:2}),
    body('artist.nickname').exists().notEmpty().isLength({min:2}),
    body('artist.nationality').exists().notEmpty().isLength({min:3}),
    body('duration').exists().notEmpty(),
    body('duration.start').exists().notEmpty(),
    body('duration.end').exists().notEmpty(),
    check('mediaId').exists().notEmpty().isMongoId(),

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


const validateGetTrack = [
    check('id').exists().notEmpty().isMongoId(),
    (req, res, next) => {
        try{
            validationResult(req).throw()
            return next()
        }catch(err){
            console.log(err.array())
            res.status('403')
            res.send({errors : err.array()})
        }
    }
];
export {
    validateCreateTrack,
    validateGetTrack
} 