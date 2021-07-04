const expressJwt = require('express-jwt');
const config = require('../config.json');
const jwt = require('jsonwebtoken');


// Extracting the text from the secret's JSON
let { secret } = config;
//console.log(secret);

// expressJwt({ secret: config.secret, algorithms: ['RS256'] });

function authenticateJwtRequestToken(req, res, next) {
    console.log(req.headers['Authorization']);
    // const authHeader = req.headers['authorization']
    // const token = authHeader && authHeader.split(' ')[1];
    // if (!token) return res.sendStatus(401);
    // jwt.verify(token, secret, (err, user) => {
    //     if (err) return res.sendStatus(403); // The token is there but it's not valid;
    //     // if the token is valid, i.e the user is present, then in the request we are 
    //     // attaching the user name, so that it can be used in other action controllers.
    //     req.user = user.name;
    //     // proceeding to the next action controller.
    //     next();
    // })
    // // Load secret into 
    // return expressJwt({ secret, algorithms: ['RS256'] }).unless({
    //     path: [
    //         // public routes that don't require authentication
    //         '/users/login',
    //         '/users/register',
    //         '/users/forgotPassword'
    //     ]
    // });
}

module.exports = authenticateJwtRequestToken;