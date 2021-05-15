const vacationsDao = require('../dao/vacations-dao')


async function getAll() {
    const vacations = await vacationsDao.getAll()
    return (vacations)
}

async function createVacation(vacationDetails) {
    console.log(vacationDetails);
    const vacationId = await vacationsDao.createVacation(vacationDetails)
    return vacationId

}
async function updateVacation(vacationDetails) {
    console.log(vacationDetails);
    const vacationId = await vacationsDao.updateVacation(vacationDetails)
    return vacationId

}
async function deleteVacation(vacationToDelete) {
    await vacationsDao.deleteVacation(vacationToDelete.id)

}


module.exports = { getAll, createVacation, updateVacation, deleteVacation }