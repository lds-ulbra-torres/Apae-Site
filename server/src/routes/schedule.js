import Schedule from '../controllers/Schedule'
import cors from 'cors'
import multer from 'multer'

const formData = multer().any()
module.exports = app => {

    let model = app.config.db.models.schedule
    let schedule = new Schedule(model)

    app.use(cors())

    app.route('/schedule')
    .post(/*app.src.auth.authenticate(),*/ formData, (req, res) => schedule.create(req, res) )
    .get((req, res) => schedule.getAll(req, res) )

    app.route('/schedule/:id')
    .get((req, res) => schedule.get(req, res) )
//    .all(app.src.auth.authenticate())
    .put(formData,(req, res) => schedule.update(req, res) )
    .delete((req,res) => schedule.delete(req, res) )
}