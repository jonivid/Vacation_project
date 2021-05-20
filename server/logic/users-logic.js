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
    validateUserDetails(userRegistrationDetails);
    console.log(userRegistrationDetails);

    if (await usersDao.isUserNameExist(userRegistrationDetails)) {
        throw new Error('userName is already exist')
    }
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
    if (userRegistrationDetails.userName == null) {
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
}
function isEmailFormat(email) {

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return true
    } else {
        alert("please insert a valid mail")
        return false
    }
}

//yehonatan please finish the email validation!!!!!!!!
// function isEmailFormat(email) {
//     const emailToValidate = `${email}`;
//     const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
//     return (emailRegexp.test(emailToValidate));
// }
module.exports = { register, login, update, deleteUser, getAll }

