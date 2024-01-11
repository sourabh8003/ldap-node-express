'use strict'

import express, { Application } from 'express'
import http from 'http'
import compression from 'compression'


const app: Application = express()
const server = http.createServer(app)

app.use(compression())


server.listen(8080, '0.0.0.0', () => {
  console.log('Ldap node express service has been launched 🚀....', '0.0.0.0', 8080)
})
