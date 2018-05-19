import Schedule from '../controllers/Schedule'
import cors from 'cors'
import multer from 'multer'

const formData = multer().any()
export default app => {
    let model = app.datasource.models.Schedule
    let schedule = new Schedule(model)

    app.use(cors())

    app.route('/schedule')
    .post(formData,(req, res) => schedule.create(req, res) )
    .get((req, res) => schedule.getAll(req, res) )

    app.route('/schedule/:id')
    .get((req, res) => schedule.get(req, res) )
    .put(formData,(req, res) => schedule.update(req, res) )
    .delete((req,res) => schedule.delete(req, res) )
}