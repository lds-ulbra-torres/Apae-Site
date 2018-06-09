import EventsController from '../controllers/Event'
import multer from 'multer'
import path from 'path'
import cors from 'cors'

export default app => {
    
    const storage = multer.diskStorage({
        destination : (req, file, cb) => cb(null, path.join(__dirname, app.config.localStorage)),
        filename : (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)    
    })
    const upload = multer({storage})
    const filesUp = upload.fields([{name: "main_photo"}, {name:"photos"}])
    
    //Load Model
    let model = app.datasource.models.EventPhotos
    let model1 = app.datasource.models.Events
    //Load Controller
    let eventsController = new EventsController(model1, model)
    
    app.use(cors())
    
    app.route('/event')
    .post(app.auth.authenticate(), filesUp, (req, res) => eventsController.create(req, res) )
    
    app.route('/event/:id')
    .get( (req, res) => eventsController.get(req, res) )
    .all(app.auth.authenticate())
    .put(filesUp,(req, res) => eventsController.update(req, res) )
    .delete( (req, res) => eventsController.delete(req, res) )
    
    app.get('/events', (req, res)=> eventsController.getAll(req, res) )
}