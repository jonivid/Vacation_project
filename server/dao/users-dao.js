const connection = require('./connection-wrapper')


async function register(userRegistrationDetails) {
    let sql = `INSERT INTO users (first_name, last_name, user_name, password, is_admin)
    VALUES(?,?,?,?,?);`

    let parameters = [userRegistrationDetails.firstName, userRegistrationDetails.lastName, userRegistrationDetails.userName,
    userRegistrationDetails.password, userRegistrationDetails.isAdmin]
    let userRegistrationResult = await connection.executeWithParameters(sql, parameters)
    return userRegistrationResult.insertId;
}
async function login(userLoginDetails) {
    let sql = `SELECT id FROM users where user_name =? and password = ?;`
    let parameters = [userLoginDetails.userName, userLoginDetails.password]
    let userLoginResult = await connection.executeWithParameters(sql, parameters)
    if (userLoginResult == null || userLoginResult.length == 0) throw new Error('UNAUTHORIZED login details please try again !!!!!')
    console.log('login completed successfully');
    return userLoginResult[0]
}
async function update(userRegistrationDetails) {
    let sql = `UPDATE users SET password=? WHERE id = ?;`
    let parameters = [userRegistrationDetails.password, userRegistrationDetails.id]
    connection.executeWithParameters(sql, parameters)
}
async function deleteUser(id) {
    let sql = `DELETE from users where id=?`
    let parameters = [id];
    await connection.executeWithParameters(sql, parameters)
}

async function isUserNameExist(userName) {
    // console.log(userName.userName);
    let sql = `SELECT user_name from users where user_name=?`
    parameters = [userName.userName]
    const userExistResult = await connection.executeWithParameters(
        sql,
        parameters
    );

    console.log('userExistResult: ' + userExistResult);

    if (userExistResult == null || userExistResult.length === 0) {
        console.log('doesnt exist');
        return false;
    }
    console.log('exist');

    return true;


}

module.exports = { register, update, login, deleteUser, isUserNameExist }