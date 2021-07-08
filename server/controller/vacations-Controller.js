const express = require('express')
const vacationsLogic = require('../logic/vacations-logic')
const router = express.Router()

//get all vacation
router.get('/', async (req, res, next) => {
    try {
        const vacations = await vacationsLogic.getAll()
        res.json(vacations)

    }
    catch (error) {
        return next(error);
    }

})
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
router.get('/:userId', async (req, res, next) => {
    try {
        const userId = +req.params.userId
        const vacations = await vacationsLogic.getAllExtended(userId)  
        res.json(vacations)
    }
    catch (error) {
        return next(error);
    }
})
module.exports = router