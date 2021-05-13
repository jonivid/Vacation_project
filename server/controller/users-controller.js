const express = require('express')
const usersLogic = require('../logic/users-logic')
const router = express.Router()




//register user
router.post('/', (req, res) => {
    try {
        console.log('register');
        const userRegistrationDetails = req.body;
        usersLogic.register(userRegistrationDetails)

    }
    catch (err) {
        console.error(err);
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
    }
})
//login user
router.post('/login', async (req, res) => {
    const userLoginDetails = req.body
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