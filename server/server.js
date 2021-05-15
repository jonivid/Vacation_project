const express = require('express')
const cors = require('cors')
const usersController = require('./controller/users-controller')
const vacationsController = require('./controller/vacations-Controller')
const loginFilter = require('./middleware/login-filter')

const server = express()
server.use(cors({ origin: 'http://localhost:3000' }))
server.use(express.json())
// server.use(loginFilter()) needs avi completion
server.use('/users', usersController)
server.use('/vacations', vacationsController)
server.listen(3001, () => console.log('port 3001 is running'))
