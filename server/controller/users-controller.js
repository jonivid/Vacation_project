const express = require('express')
const usersLogic = require('../logic/users-logic')
const router = express.Router()
let cacheModule = require("../logic/cache-module");




//get all user
router.get('/', async (req, res) => {
    try {
        const users = await usersLogic.getAll()
        res.json(users)

    }
    catch (err) {
        console.error(err)
        res.status(600).send(err.message)
    }

})

//register user
router.post('/', async (req, res) => {
    try {
        console.log('register');
        const userRegistrationDetails = req.body;
        const id = await usersLogic.register(userRegistrationDetails)
        res.json(id)

    }
    catch (err) {
        console.error(err);
        res.status(600).send(err.message)
    }
})

////update password // need more work

router.post('/', (req, res) => {
    const id = cacheModule.extractUserDataFromCache(req).id
    //we got the user id ===> need more work
    try {
        console.log('update');
        const userDetails = req.body;
        usersLogic.update(userDetails)

    }
    catch (err) {
        console.error(err);
        res.status(600).send(err.message)
    }
})
//login user
router.post('/login', async (req, res) => {
    const userLoginDetails = req.body;
    console.log(userLoginDetails);
    try {
        let succsessfullyLoginData = await usersLogic.login(userLoginDetails)
        console.log(succsessfullyLoginData);
        res.json(succsessfullyLoginData)

    } catch (err) {
        console.error(err)
        res.status(600).send(err.message)

    }
})

router.delete('/', async (req, res) => {
    const userToDelete = req.body

    try {
        await usersLogic.deleteUser(userToDelete)
        res.status(200).json(`user is deleted `)
    }
    catch (err) {
        console.error(err)
        res.status(600).send(err.message)

    }
})


module.exports = router