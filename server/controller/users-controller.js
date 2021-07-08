const express = require('express')
const usersLogic = require('../logic/users-logic')
const router = express.Router()

router.get('/:tokenInfo', async (req, res, next) => {
    try {
        const tokenInfo = req.params.tokenInfo
        const result = await usersLogic.auth(tokenInfo)
        if (result) res.json(result)

    }
    catch (error) {
        return next(error);

    }
})


router.post('/', async (req, res, next) => {
    try {
        const userRegistrationDetails = req.body;
        const id = await usersLogic.register(userRegistrationDetails)
        res.json(id)

    }
    catch (error) {
        return next(error);
    }
})
router.post('/login', async (req, res, next) => {
    const userLoginDetails = req.body;
    try {
        let succsessfullyLoginData = await usersLogic.login(userLoginDetails)
        res.json(succsessfullyLoginData)

    } catch (error) {
        return next(error);
    }
})

router.delete('/:userId', async (req, res, next) => {
    const userId = +req.params.userId

    try {
        await usersLogic.deleteUser(userId)
        res.status(200).json(`user is deleted `)
    }
    catch (error) {
        return next(error);
    }
})


module.exports = router