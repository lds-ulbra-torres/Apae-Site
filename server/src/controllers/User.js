import responseFormat from '../helpers/response-format'
import jwt from "jwt-simple";

class UsersController {
    
    constructor (userModel) {
        this.userModel = userModel
    }

   validate(req, res, secretOrKey){
        
        const email = req.body.email
        const password = req.body.password

        return this.userModel.findOne({
            attributes: ['password', 'email', 'id'],
            where : { email }
        }).then(user => {

            if(this.userModel.isPassword(user.password, password)){    
                const payload = {id: user.id};
                const token = {token: jwt.encode(payload, secretOrKey)}
                res.json(responseFormat(token,"Login efetuado com sucesso").defaultMsg())
            }else
                res.status(400).json(responseFormat({},"Email ou Senha inválida").defaultMsg())

        }).catch(error => {
            
            res.status(412).json(error)
        
        })
    }
}
export default UsersController