import responseFormat from '../helpers/response-format' 
import {isNullOrUndefined} from 'util'

class AboutController {
    
    constructor (aboutModel, storage) {
        this.aboutModel = aboutModel
        this.storage = storage
    }

    get(req, res){    
        
        return this.aboutModel.about(response => {
            res.json(responseFormat(response,"ok").defaultMsg())
        })

    }
    update(req, res){

        let data = req.body

        if(!isNullOrUndefined(req.files.main_photo)){     
            data.main_photo = `${this.storage}/uploads/${req.files.main_photo[0].filename}`  
            this.aboutModel.main_photoDelete()
        }
        return this.aboutModel.update( data, { where: { id : 1 } })
        .then(response => {
            res.json(responseFormat(response,"Sobre atualizado com sucesso").defaultMsg())
        })
        .catch(error => {
            res.status(400).json(responseFormat({},"Este sobre não pode ser atualizado").inexistentMsg())
        })

    }
}
export default AboutController