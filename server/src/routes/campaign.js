import CampaignsController from '../controllers/Campaign'
import multer from 'multer'

const storage = multer.diskStorage({
    destination : (req, file, cb) => cb(null, '/Users/progr/Documents/Apae-Site/server/uploads/'),
    filename : (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)    
})
const upload = multer({storage})
const filesUp = upload.fields([{ name: 'logotipo' }, { name: 'imagem_promo'}])

export default app => {
    //Load Model
    let model = app.datasource.models.Campaigns
    //Load Controller
    let campaignsController = new CampaignsController(model)
    
    app.route('/campaign')
    .get( (req, res) => campaignsController.get(req, res) )
    .post(filesUp, (req, res) => campaignsController.create(req, res) )
    
    app.route('/campaign/:id')
    .put(filesUp,(req, res) => campaignsController.update(req, res) )
    .delete( (req, res) => campaignsController.delete(req, res) )
    
    app.get('/campaigns', (req, res)=> campaignsController.getAll(req, res) )
}