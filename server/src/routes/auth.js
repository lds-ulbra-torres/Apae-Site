import UsersController from '../controllers/User'
import multer from 'multer'

const formData = multer().any()

module.exports = app => {
    //Load Model
    let model = app.config.db.models.users
    //Load Controller
    let controller = new UsersController(model)

    app.route('/auth')
    .post(formData,(req, res) =>{

        return controller.validate(req, res, app.config.jwtSecret)
    
    })
}