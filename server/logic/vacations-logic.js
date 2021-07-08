const vacationsDao = require('../dao/vacations-dao')


async function getAll() {
    const vacations = await vacationsDao.getAll()
    return (vacations)
}
async function getAllExtended(userId) {
    const vacations = await vacationsDao.getAllExtended(userId)
    return (vacations)
}

async function createVacation(vacationDetails) {
    console.log(vacationDetails);
    const vacationId = await vacationsDao.createVacation(vacationDetails)
    return vacationId

}
async function updateVacation(vacationDetails) {
    const vacationId = await vacationsDao.updateVacation(vacationDetails)
    return vacationId

}
async function deleteVacation(vacationToDelete) {
    await vacationsDao.deleteVacation(vacationToDelete)
}


module.exports = { getAll, createVacation, updateVacation, deleteVacation,getAllExtended }