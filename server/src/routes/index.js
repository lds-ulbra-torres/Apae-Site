import express from 'express'
import campaign from './campaign'
import auth from './auth'
import swagger from './swagger'
import events from './event'

export default (app) => {
    auth(app)
    campaign(app)
    events(app)
    swagger(app)
}