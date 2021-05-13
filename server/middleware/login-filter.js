const expressJwt = require('express-jwt');
const config = require('../config.json');

// Extracting the text from the secret's JSON
let { secret } = config;
//console.log(secret);

// expressJwt({ secret: config.secret, algorithms: ['RS256'] });

function authenticateJwtRequestToken() {
    // Load secret into 
    return expressJwt({ secret, algorithms: ['RS256'] }).unless({
        path: [
            // public routes that don't require authentication
            '/users/login',
            '/users/register',
            '/users/forgotPassword'
        ]
    });
}

module.exports = authenticateJwtRequestToken;