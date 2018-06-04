import AboutsController from '../controllers/About'
import multer from 'multer'
import path from 'path'
import cors from 'cors'

const storage = multer.diskStorage({
    destination : (req, file, cb) => cb(null, path.join(__dirname, '../../uploads')),
    filename : (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)    
})
const upload = multer({storage})
const filesUp = upload.fields([{name: "main_photo"}])

export default app => {
    //Load Model
    let model = app.datasource.models.About
    //Load Controller
    let aboutsController = new AboutsController(model)
    
    app.use(cors())
    
    app.route('/about')
    .get( (req, res) => aboutsController.get(req, res) )
    .put(filesUp,(req, res) => aboutsController.update(req, res) )
}