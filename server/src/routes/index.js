import express from 'express'
import campaign from './campaign'
import auth from './auth'
import swagger from './swagger'
import events from './event'
import schedule from './schedule';


export default (app) => {
    auth(app)
    campaign(app)
    events(app)
    swagger(app)
    schedule(app)
}