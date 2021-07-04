const usersDao = require('../dao/users-dao')
const crypto = require("crypto");
let cacheModule = require("./cache-module");
const jwt = require('jsonwebtoken');
const config = require('../config.json');

const saltRight = "asdasdasdas";
const saltLeft = "--mnlcfdsfsds;@!$ ";


async function getAll() {
    const users = await usersDao.getAll()
    return (users)
}

async function register(userRegistrationDetails) {
    await validateUserDetails(userRegistrationDetails);
    userRegistrationDetails.password = crypto.createHash("md5").update(saltLeft + userRegistrationDetails.password + saltRight).digest("hex");
    const id = await usersDao.register(userRegistrationDetails)
    return id

}
async function update(userDetails) {
    validateUserDetails(userRegistrationDetails);
    await usersDao.update(userDetails)

}
async function login(userLoginDetails) {
    userLoginDetails.password = crypto.createHash("md5").update(saltLeft + userLoginDetails.password + saltRight).digest("hex");
    let userData = await usersDao.login(userLoginDetails)
    let saltedUserName = saltLeft + userLoginDetails.userName + saltRight
    const jwtToken = jwt.sign({ sub: saltedUserName }, config.secret, { expiresIn: '30m' })
    console.log("Token before adding to cache : " + jwtToken);
    console.log("User Data before adding to cache : " + JSON.stringify(userData));
    cacheModule.set(jwtToken, userData)//cache setter 
    let successfullLoginResponse = { token: jwtToken, id: userData.id, isAdmin: userData.isAdmin, firstName: userData.firstName, lastName: userData.lastName };
    //need to return isAdmin or not inside successfullLoginResponse to navigate the to homepage or adminBoard
    return successfullLoginResponse;
}

async function deleteUser(userId) {
    await usersDao.deleteUser(userId);

}


async function validateUserDetails(userRegistrationDetails) {
    if (userRegistrationDetails.userName === "") {
        throw new Error(`userName is null`)
    }
    if (!isEmailFormat(userRegistrationDetails.userName)) {
        throw new Error('UserName is not in email format')
    }
    if (userRegistrationDetails.password == null) {
        throw new Error(`userName is null`)
    }
    if (userRegistrationDetails.password.length < 6) {
        throw new Error(`password too short`)
    }
    if (userRegistrationDetails.password.length > 12) {
        throw new Error(`password too long`)
    }
    if (await usersDao.isUserNameExist(userRegistrationDetails.userName)) {
        throw new Error(`userName exists`)
    }
}
function isEmailFormat(email) {
    const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (emailRegexp.test(email)) {
        return true
    } else {
        return false
    }
}


module.exports = { register, login, update, deleteUser, getAll }

