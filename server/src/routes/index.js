import express from 'express'
import campaign from './campaign'
import auth from './auth'

export default (app) => {
    auth(app)
    campaign(app)
}