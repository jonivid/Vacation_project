const express = require('express')
const cors = require('cors')
const usersController = require('./controller/users-controller')
const vacationsController = require('./controller/vacations-Controller')
const handleFollowController = require('./controller/handle-follow-controller')
const errorHandler = require('./errors/error-handler')
const loginFilter = require('./middleware/login-filter')

const server = express()

const whitelist = ['http://localhost:3000', 'https://vacation-client.herokuapp.com']
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}
server.use(cors(corsOptions))
server.use(express.json())
server.use('/users', usersController)
server.use(loginFilter)
server.use('/vacations', vacationsController)
server.use('/follow', handleFollowController)
server.use(errorHandler)
server.listen(3001, () => console.log('port 3001 is running'))
