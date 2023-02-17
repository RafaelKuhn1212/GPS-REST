import * as dotenv from 'dotenv'
dotenv.config()

import config from './config/createExpressConfig'
import express from 'express'
const app = express()

config(app)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})