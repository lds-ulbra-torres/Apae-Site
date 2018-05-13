import responseFormat from '../helpers/response-format'

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
                res.status(200).json(responseFormat({},"Login efetuado com sucesso").defaultMsg())
            else
                res.status(400).json(responseFormat({},"Email ou Senha inválida").defaultMsg())
        
        }).catch(error => {
            
            res.status(412).json(responseFormat(error).erroMsg())
        
        })
    }
}
export default UsersController