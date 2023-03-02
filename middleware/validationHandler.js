const fs = require('fs')
const path = require('path')
const jwt = require('jsonwebtoken')
const boom = require('@hapi/boom')
// const joi = require('joi');

// function validate(data, schema) {
//     const { error } = joi.object(schema).validate(data);
//     return error;
// }

// function validationHandler(schema, check = 'body') {
//     return function (req, res, next) {
//         const error = validate(req[check], schema);
//         error ? next(boom.badRequest(error)) : next();
//     };
// }

function validationHandler(req, res, next) {
    let auth = req.get('Authorization')
    let status = 401
    let msg = 'Token necesario'
    if (auth) {
        const validToken = auth.includes('Bearer ')
        if (validToken) {
            const token = auth.replace('Bearer ', '')
            jwt.verify(token, 'secret', (err) => {
                if (err === null) {
                    next();
                } else {
                    if (err.name === 'TokenExpiredError') {
                        msg = 'Lo sentimos, su sesión ya expiró.'
                    }
                    if (err.name === 'JsonWebTokenError') {
                        msg = 'El token esta malformado.'
                    }
                    const errorBoom = boom.unauthorized(msg)
                    delete errorBoom.stack
                    next(errorBoom)
                }
            })
            // const PUB_KEY = fs.readFileSync(path.join(__dirname, '../ssh/public.key'), 'utf8')
            // jwt.verify(token, PUB_KEY, { algorithms: ['RS256'] }, (err) => { })
        } else {
            const errorBoom = boom.unauthorized('El token está malformado.')
            delete errorBoom.stack
            next(errorBoom)
        }
    } else {
        res.status(status).json({ status, msg })
    }
}

module.exports = validationHandler