import express from 'express'
import campaign from './campaign'
import auth from './auth'
import swagger from './swagger'
import events from './event'
import schedule from './schedule';
import about from './about';


export default (app) => {
    auth(app)
    about(app)
    campaign(app)
    events(app)
    swagger(app)
    schedule(app)
}