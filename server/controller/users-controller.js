const express = require('express')
const usersLogic = require('../logic/users-logic')
const router = express.Router()

// get user by token
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

//register new user
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
//user login
router.post('/login', async (req, res, next) => {
    const userLoginDetails = req.body;
    try {
        let succsessfullyLoginData = await usersLogic.login(userLoginDetails)
        console.log(succsessfullyLoginData);
        res.json(succsessfullyLoginData)

    } catch (error) {
        return next(error);
    }
})
//delete user => for future coding....
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