const express = require('express')
const cors = require('cors')
const userController = require('./controller/users-controller')

const server = express()
server.use(cors({ origin: 'http://localhost:3000' }))
server.use(express.json())

server.use('/users', userController)
server.listen(3001, () => console.log('port 3001 is running'))
