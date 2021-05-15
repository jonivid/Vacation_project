const express = require('express')
const usersLogic = require('../logic/users-logic')
const router = express.Router()



//get all user
router.get('/', async (req, res) => {
    try {
        const users = await usersLogic.getAll()
        res.json(users)

    }
    catch (err) {
        console.error(err);
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
        res.json(err)
    }
})

////update password

router.post('/', (req, res) => {
    try {
        console.log('update');
        const userDetails = req.body;
        usersLogic.update(userDetails)

    }
    catch (err) {
        console.error(err);
        res.json(err)
    }
})
//login user
router.post('/login', async (req, res) => {
    const userLoginDetails = req.body
    console.log(userLoginDetails);
    try {
        let succsessfullyLoginData = await usersLogic.login(userLoginDetails)
        res.json(succsessfullyLoginData)

    } catch (err) {
        console.error(err)
        res.status(401).send(err.message)

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
        res.status(404).send(err.message)

    }
})



module.exports = router