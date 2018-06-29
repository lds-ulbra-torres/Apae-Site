import express from 'express'
import consign from 'consign'

const app = express()

consign({verbose: false})
    .include("config/config.js")
    .then("config/db.js")
    .then("./src/auth.js")
    .then("config/middlewares.js")
    .then("./src/routes")
    .into(app);

module.exports = app