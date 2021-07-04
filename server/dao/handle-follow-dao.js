const connection = require('./connection-wrapper')
let ServerError = require("../errors/server-error");
let ErrorType = require("../errors/error-type");

//vacation followed by userId
const getAllfollowedVacations = async (details) => {
    const sql = `select destenation,v.id as vacationId,u.id as userId  from vacations v inner join users_followed_vacations ufv on  ufv.vacation_id=v.id  inner join users u on u.id = ufv.user_id where u.id=? and v.id=?`;
    const parameters = [details.userId, details.vacationId]
    const result = await connection.executeWithParameters(sql, parameters);
    return result
};

//get number of follower by vacation id
const getNumOfFollowersByVacationId = async (vacationId) => {
    const sql = `select  COUNT(*) as followers  from vacations v inner join users_followed_vacations ufv on  ufv.vacation_id=v.id   where v.id=?`;
    const parameters = [vacationId]
    try {
        return await connection.executeWithParameters(sql, parameters);
    }
    catch (err) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, err);
    }
};

const followVacation = async (details) => {
    const sql = `insert into users_followed_vacations (user_id,vacation_id) values(?,?)`;
    const parameters = [details.userId, details.vacationId];
    try {

        return await connection.executeWithParameters(sql, parameters);
    }
    catch (err) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, err);
    }
};
const unfollowVacation = async (details) => {
    const sql = `DELETE from users_followed_vacations where user_id=? and vacation_id=?`;
    const parameters = [details.userId, details.vacationId];
    await connection.executeWithParameters(sql, parameters);
};

module.exports = { getAllfollowedVacations, followVacation, unfollowVacation, getNumOfFollowersByVacationId }