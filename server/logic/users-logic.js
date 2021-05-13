const usersDao = require('../dao/users-dao')
const crypto = require("crypto");
let cacheModule = require("./cache-module");
const jwt = require('jsonwebtoken');
const config = require('../config.json');

const saltRight = "asdasdasdas";
const saltLeft = "--mnlcfdsfsds;@!$ ";

async function register(userRegistrationDetails) {
    validateUserDetails(userRegistrationDetails);
    userRegistrationDetails.password = crypto.createHash("md5").update(saltLeft + userRegistrationDetails.password + saltRight).digest("hex");
    console.log(userRegistrationDetails);
    await usersDao.register(userRegistrationDetails)

}
async function update(userDetails) {
    validateUserDetails(userRegistrationDetails);
    console.log(userRegistrationDetails);
    await usersDao.update(userDetails)

}
async function login(userLoginDetails) {
    userLoginDetails.password = crypto.createHash("md5").update(saltLeft + userLoginDetails.password + saltRight).digest("hex");
    let userData = await usersDao.login(userLoginDetails)
    let saltedUserName = saltLeft + userLoginDetails + saltRight
    const jwtToken = jwt.sign({ sub: saltedUserName }, config.secret)
    console.log("Token before adding to cache : " + jwtToken);
    console.log("User Data before adding to cache : " + JSON.stringify(userData));
    cacheModule.set(jwtToken, userData)
    let successfullLoginResponse = { token: jwtToken };
    return successfullLoginResponse;
}

async function deleteUser(userToDelete) {
    await usersDao.deleteUser(userToDelete.id);
}


function validateUserDetails(userRegistrationDetails) {
    //we will built it later....
}
module.exports = { register, login, update, deleteUser }