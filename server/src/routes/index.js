import express from 'express'
import campaign from './campaign'
import auth from './auth'
import swagger from './swagger'

export default (app) => {
    auth(app)
    campaign(app)
    swagger(app)
}