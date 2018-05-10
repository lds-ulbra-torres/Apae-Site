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
    .get((req, res) =>{
        return campaignsController.get(req, res)
    })
    .post(filesUp, (req, res) =>{
        return campaignsController.create(req, res)
    })
    .put(filesUp,(req, res) =>{
        return campaignsController.update(req, res)
    })
    .delete((req, res) =>{
        return campaignsController.delete(req, res)
    })
}