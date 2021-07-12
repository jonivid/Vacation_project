const express = require('express')
const handleFollowLogic = require('../logic/handle-follow-logic')
const router = express.Router()

// get all followed vacation by user
router.get("/vacationFollow/:vacationId", async (req, res, next) => {
    try {
        const vacationId = +req.params.vacationId
        const result = await handleFollowLogic.getNumOfFollowersByVacationId(vacationId);
        res.json(result);
    }
    catch (error) {
        return next(error);
    }
})
// get if user follow vacation
router.get("/:userId/:vacationId", async (req, res, next) => {
    try {
        const { userId, vacationId } = req.params
        const result = await handleFollowLogic.getAllfollowedVacations({ userId, vacationId });
        res.json(result);
    }
    catch (error) {
        return next(error);
    }
})


//Follow vacation by user
router.post('/', async (req, res, next) => {
    try {
        const userFollowDetails = req.body
        const result = await handleFollowLogic.followVacation(userFollowDetails)
        res.json(result)
    }
    catch (error) {
        return next(error);
    }
})

//Unfollow vacation by user
router.delete("/:userId/:vacationId", async (req, res, next) => {
    try {
        const { userId, vacationId } = req.params
        const result = await handleFollowLogic.unfollowVacation({ userId, vacationId })
        res.json(result)
    }
    catch (error) {
        return next(error);
    }
})

module.exports = router