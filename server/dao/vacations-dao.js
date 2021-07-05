const connection = require('./connection-wrapper')

async function getAll() {
    // SELECT * from vacations
    let sql = `select vacations.*, count(users_followed_vacations.vacation_id) as followers from vacations left join users_followed_vacations on vacations.id = users_followed_vacations.vacation_id group by vacations.id order by followers desc`
    const vacations = await connection.execute(sql)
    return vacations

}

async function createVacation(vacationDetails) {
    let sql = `INSERT INTO vacations (destenation,details,price,start_date,end_date,image) 
    Values(?,?,?,?,?,?)`
    let parameters = [vacationDetails.destenation, vacationDetails.details, vacationDetails.price, vacationDetails.startDate, vacationDetails.endDate, vacationDetails.image]
    let createVacationResult = await connection.executeWithParameters(sql, parameters)
    return createVacationResult.insertId
}
async function updateVacation(vacationDetails) {
    let sql = `UPDATE vacations SET destenation=?,details=?,price=?,start_date=?,end_date=?,image=?  WHERE id =?;`
    let parameters = [vacationDetails.destenation, vacationDetails.details, vacationDetails.price, vacationDetails.startDate, vacationDetails.endDate, vacationDetails.image, vacationDetails.id,]
    console.log(parameters);
    let createVacationResult = await connection.executeWithParameters(sql, parameters)
    // return createVacationResult.insertId
}
async function deleteVacation(vacationToDelete) {
    console.log(vacationToDelete);
    let sql = `DELETE from vacations where id=?`
    let parameters = [vacationToDelete];
    await connection.executeWithParameters(sql, parameters)
}

module.exports = { getAll, createVacation, updateVacation, deleteVacation }