const express = require('express')
const vacationsLogic = require('../logic/vacations-logic')
const router = express.Router()

//get all vacation
router.get('/', async (req, res) => {
    try {
        const vacations = await vacationsLogic.getAll()
        res.json(vacations)

    }
    catch (err) {
        console.error(err);
    }

})
// create vacation
router.post('/', async (req, res) => {

    try {
        const vacationDetails = req.body;
        const vacationId = await vacationsLogic.createVacation(vacationDetails)
        res.json(vacationId)

    }
    catch (err) {
        console.error(err);
    }

})
// update vacation
router.post('/', async (req, res) => {

    try {
        const vacationDetails = req.body;
        const vacationId = await vacationsLogic.updateVacation(vacationDetails)
        res.json(vacationId)

    }
    catch (err) {
        console.error(err);
    }

})

router.delete('/', async (req, res) => {
    const vacationToDelete = req.body

    try {
        await vacationsLogic.deleteVacation(vacationToDelete)
        res.status(200).json(`vacation is deleted `)
    }
    catch (err) {
        console.error(err)
        res.status(404).send(err.message)

    }
})
module.exports = router