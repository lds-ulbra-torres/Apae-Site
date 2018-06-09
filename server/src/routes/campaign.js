import CampaignsController from '../controllers/Campaign'
import multer from 'multer'
import path from 'path'
import cors from 'cors'

export default app => {

    const storage = multer.diskStorage({
        destination : (req, file, cb) => cb(null, path.join(__dirname, app.config.localStorage)),
        filename : (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)    
    })
    const upload = multer({storage})
    const filesUp = upload.fields([{ name: 'logotipo' }, { name: 'imagem_promo'}])

    //Load Model
    let model = app.datasource.models.campaigns
    //Load Controller
    let campaignsController = new CampaignsController(model)

    app.use(cors())
    
    app.route('/campaign')
    .get( (req, res) => campaignsController.get(req, res) )
    .post(app.auth.authenticate(), filesUp, (req, res) => campaignsController.create(req, res) )
    
    app.route('/campaign/:id')
    .all(app.auth.authenticate())
    .put(filesUp,(req, res) => campaignsController.update(req, res) )
    .delete( (req, res) => campaignsController.delete(req, res) )
    
    app.get('/campaigns', (req, res)=> campaignsController.getAll(req, res) )
}