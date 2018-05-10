class UsersController {
    
    constructor (userModel) {
        this.userModel = userModel
    }

    validate(req, res){
        const email = req.body.email
        const password = req.body.password
        
        return this.userModel.findOne({
            attributes: ['password', 'email'],
            where : { email }
        }).then(user => {
            //Method to validate password
            let result = this.userModel.isPassword(user.password, password)
        
            if(result)
                res.status(200).send(true)
            else
                res.status(400).send(false)
        
        }).catch(error => res.status(412).json({    
            msg: error.message
        }))
    }
}
export default UsersController