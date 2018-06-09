import express from 'express'
import bodyParser from 'body-parser'
import db from './config/db'
import config from './config/config'
import routes from './routes/index'
import auth from './auth'

const app = express()

//Database and token settings
app.config = config
app.datasource = db(app)
//Body-parse settings
app.use(bodyParser.json())
// Converts the body of a request in json format
app.use(bodyParser.urlencoded({extended : true}))
// Determines the 'public' directory for static files
app.use(express.static("public"));

app.auth =  auth(app)
app.use(app.auth.initialize());

routes(app)


export default app