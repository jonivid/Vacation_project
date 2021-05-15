const connection = require('./connection-wrapper')

async function getAll() {
    let sql = `SELECT * from vacations`
    const vacations = await connection.execute(sql)
    return vacations

}
async function createVacation(vacationDetails) {
    let sql = `INSERT INTO vacations (destenation,details,price,start_date,end_date,followers) 
    Values(?,?,?,?,?,10)`
    let parameters = [vacationDetails.destenation, vacationDetails.details, vacationDetails.price, vacationDetails.startDate, vacationDetails.endDate]
    let createVacationResult = await connection.executeWithParameters(sql, parameters)
    return createVacationResult.insertId
}
async function updateVacation(vacationDetails) {
    let sql = `UPDATE vacations SET destenation=?,details=?,price=?,start_date=?,end_date=? WHERE id =?;`
    let parameters = [vacationDetails.destenation, vacationDetails.details, vacationDetails.price, vacationDetails.startDate, vacationDetails.endDate, vacationDetails.id]
    let createVacationResult = await connection.executeWithParameters(sql, parameters)
    return createVacationResult.insertId
}
async function deleteVacation(id) {
    let sql = `DELETE from vacations where id=?`
    let parameters = [id];
    await connection.executeWithParameters(sql, parameters)
}

module.exports = { getAll, createVacation, updateVacation,deleteVacation }