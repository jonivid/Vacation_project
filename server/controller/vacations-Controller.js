const express = require('express')
const vacationsLogic = require('../logic/vacations-logic')
const router = express.Router()
let cacheModule = require("../logic/cache-module");


// create vacation
router.post('/', async (req, res, next) => {

    try {
        const vacationDetails = req.body;
        const vacationId = await vacationsLogic.createVacation(vacationDetails)
        res.json(vacationId)

    }
    catch (error) {
        return next(error);
    }

})
// update vacation
router.put('/', async (req, res, next) => {

    try {
        const vacationDetails = req.body;
        const vacationId = await vacationsLogic.updateVacation(vacationDetails)
        res.json(vacationId)
    }
    catch (error) {
        return next(error);
    }
})
//delete vacation
router.delete('/:vacationId', async (req, res, next) => {
    try {
        const vacationToDelete = +req.params.vacationId
        await vacationsLogic.deleteVacation(vacationToDelete)
        res.status(200).json(`vacation is deleted `)
    }
    catch (error) {
        return next(error);
    }
})
//get all vacations by userId
router.get('/', async (req, res, next) => {
    try {
        let authorizationString = req.headers["authorization"]
        let userData = cacheModule.extractUserDataFromCache(authorizationString)
        const vacations = await vacationsLogic.getAllExtended(userData.id)
        res.json(vacations)
    }
    catch (error) {
        return next(error);
    }
})
module.exports = router