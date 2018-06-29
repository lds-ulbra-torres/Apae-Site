import EventsController from '../controllers/Event'
import multer from 'multer'
import path from 'path'
import cors from 'cors'

module.exports = app => {
    
    const storage = multer.diskStorage({
        destination : (req, file, cb) => cb(null, path.join(__dirname, app.config.config.localStorage)),
        filename : (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)    
    })
    const upload = multer({storage})
    const filesUp = upload.fields([{name: "main_photo"}, {name:"photos"}])
    const hostStorage = app.config.config.hostStorage
     
    //Load Model
    let model = app.config.db.models.eventPhotos
    let model1 = app.config.db.models.events
    //Load Controller
    let eventsController = new EventsController(model1, model, hostStorage)
    
    app.use(cors())
    
    app.route('/event')
    .post(/*app.src.auth.authenticate(), */filesUp, (req, res) => eventsController.create(req, res) )
    
    app.route('/event/:id')
    .get( (req, res) => eventsController.get(req, res) )
    //.all(app.src.auth.authenticate())
    .put(filesUp,(req, res) => eventsController.update(req, res) )
    .delete( (req, res) => eventsController.delete(req, res) )
    
    app.get('/events', (req, res)=> eventsController.getAll(req, res) )
}