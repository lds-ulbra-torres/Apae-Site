import AboutsController from '../controllers/About'
import multer from 'multer'
import path from 'path'
import cors from 'cors'
 
module.exports = app => {
    
    const storage = multer.diskStorage({
        destination : (req, file, cb) => cb(null, path.join(__dirname,  app.config.config.localStorage)),
        filename : (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)    
    })
    const upload = multer({storage})
    const filesUp = upload.fields([{name: "main_photo"}])
    const hostStorage = app.config.config.hostStorage
    
    //Load Model
    let model = app.config.db.models.about
    //Load Controller
    let aboutsController = new AboutsController(model, hostStorage)
    
    app.use(cors())
    
    app.route('/about')
    .get( (req, res) => aboutsController.get(req, res) )
    .put(/*app.src.auth.authenticate(), */filesUp, (req, res) => aboutsController.update(req, res) )
}