const express = require('express')
const usersLogic = require('../logic/users-logic')
const router = express.Router()
let cacheModule = require("../logic/cache-module");




//get all user
router.get('/', async (req, res,next) => {
    try {
        const users = await usersLogic.getAll()
        res.json(users)

    }
    catch (error) {
        return next(error);
    }
})

//register user
router.post('/', async (req, res,next) => {
    try {
        const userRegistrationDetails = req.body;
        const id = await usersLogic.register(userRegistrationDetails)
        res.json(id)

    }
    catch (error) {
        return next(error);
    }
})

////update password // need more work

router.put('/', (req, res,next) => {
    const id = cacheModule.extractUserDataFromCache(req).id
    //we got the user id ===> need more work
    try {
        console.log('update');
        const userDetails = req.body;
        usersLogic.update(userDetails)

    }
    catch (error) {
        return next(error);
    }
})
//login user
router.post('/login', async (req, res,next) => {
    const userLoginDetails = req.body;
    console.log(userLoginDetails);
    try {
        let succsessfullyLoginData = await usersLogic.login(userLoginDetails)
        console.log("controller user states", succsessfullyLoginData);
        res.json(succsessfullyLoginData)

    } catch (error) {
        return next(error);
    }
})

router.delete('/:userId', async (req, res,next) => {
    const userId =  +req.params.userId

    try {
        await usersLogic.deleteUser(userId)
        res.status(200).json(`user is deleted `)
    }
    catch (error) {
        return next(error);
    }
})


module.exports = router