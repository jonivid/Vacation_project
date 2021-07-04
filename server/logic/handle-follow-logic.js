const handleFollowDao = require('../dao/handle-follow-dao')

async function getAllfollowedVacations(details) {
    const result = await handleFollowDao.getAllfollowedVacations(details)
    return result
}
async function getNumOfFollowersByVacationId(vacationId) {
    const result = await handleFollowDao.getNumOfFollowersByVacationId(vacationId)
    return result
}
async function followVacation(details) {
    const result = await handleFollowDao.followVacation(details)
    return result
}
async function unfollowVacation(details) {
    const result = await handleFollowDao.unfollowVacation(details)
    return result
}



module.exports = { getAllfollowedVacations, followVacation, unfollowVacation, getNumOfFollowersByVacationId }