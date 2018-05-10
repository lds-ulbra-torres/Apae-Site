import UsersController from '../controllers/User'

export default app => {
    //Load Model
    let model = app.datasource.models.Users
    //Load Controller
    let controller = new UsersController(model)

    app.route('/auth')
    .get((req, res) =>{
        return controller.validate(req, res)
    })
}