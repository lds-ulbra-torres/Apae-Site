import CampaignsController from '../controllers/Campaign'
import multer from 'multer'
import path from 'path'
import cors from 'cors'

module.exports = app => {

    const storage = multer.diskStorage({
        destination : (req, file, cb) => cb(null, path.join(__dirname,  app.config.config.localStorage)),
        filename : (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)    
    })
    const upload = multer({storage})
    const filesUp = upload.fields([{ name: 'logotipo' }, { name: 'imagem_promo'}])
    const hostStorage = app.config.config.hostStorage
    //Load Model
    let model = app.config.db.models.campaigns
    //Load Controller
    let campaignsController = new CampaignsController(model, hostStorage)

    app.use(cors())
    
    app.route('/campaign')
    .get( (req, res) => campaignsController.get(req, res) )
    .post(/*app.src.auth.authenticate(),*/ filesUp, (req, res) => campaignsController.create(req, res) )
    
    app.route('/campaign/:id')
//    .all(app.src.auth.authenticate())
    .put(filesUp,(req, res) => campaignsController.update(req, res) )
    .delete( (req, res) => campaignsController.delete(req, res) )
    
    app.get('/campaigns', (req, res)=> campaignsController.getAll(req, res) )
}