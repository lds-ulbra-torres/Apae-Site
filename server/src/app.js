import express from 'express'
import bodyParser from 'body-parser'
import db from './config/db'
import dbConfig from './config/dbConfig'
import routes from './routes/index'

const app = express()

//Config Databse
app.config = dbConfig
app.datasource = db(app)
//Config Body Parse
app.use(bodyParser.json())
// Este metodo diz que o body de um requisa é convertida em json, pela biblioteca body-parser
app.use(bodyParser.urlencoded({extended : true}))
//Auto load routes
routes(app)


export default app