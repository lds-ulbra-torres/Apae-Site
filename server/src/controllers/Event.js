import responseFormat from '../helpers/response-format' 
import {isNullOrUndefined} from 'util'
import fs from 'fs'

class EventController {
    
    constructor (eventModel, photoModel) {
        this.eventModel = eventModel
        this.photoModel = photoModel
    }

    get(req, res){

        let id = req.params.id
        
        return this.eventModel.event(id)
        .then(response => {
            res.json(responseFormat(response,"ok").defaultMsg())
        })
        .catch(error => {
            res.status(400).json(responseFormat(error).erroMsg())
        })
    }
    getAll(req, res){

        return this.eventModel.events()
        .then(response => {
            res.json(responseFormat(response,"ok").defaultMsg())
        })
        .catch(error => {
            res.status(400).json(error)
        })
    }
    create(req, res){
        
        let data = req.body

        if(isNullOrUndefined(req.files.main_photo))
            return res.status(400).json(({status:400, msg : "É obrigatorio uma Foto de Capa",obj:{}}))      
        
        data.logotipo = `${req.headers.origin}/uploads/${req.files.main_photo[0].filename}`
        return this.eventModel.create(data)
            .then(response => {
                let vetor = []
                if(!isNullOrUndefined(req.files.photos)){
                    if(!isNullOrUndefined(req.files.photos)){
                        vetor = this.photosCreate(response.id,req)
                    }
                }
                res.json(responseFormat({},"Evento criado com sucesso").eventCreateMsg(response, vetor))
            })
            .catch(error => {
                res.status(400).json(responseFormat(error).erroMsg())
            })
    }
    update(req, res){
    
        let id = req.params.id
        
        if(this.validationExistence(id)){

                let data = req.body

                this.updateFiles(req)

                this.eventModel.update( data, { where: { id } })
                .then(response => {
                    let vetor = []
                
                    if(!isNullOrUndefined(req.files.photos))
                        vetor = this.photosCreate(id,req)
                    
                    return res.json(responseFormat(response,"Evento atualizada com sucesso").defaultMsg())
                })
                .catch(error => {
                    return res.status(400).json(responseFormat(error).erroMsg())
                })
            }else{
                if(!isNullOrUndefined(req.files.photos)){ 
                    req.files.photos.forEach(element => {
                        fs.unlink(element.path, () => console.log(element.path))
                    }) 
                }
                if(!isNullOrUndefined(req.files.main_photo))
                    fs.unlink(req.files.main_photo[0].path, () => console.log(req.files.main_photo[0].path))
                
                return res.status(400).json(responseFormat({},"Este evento não está registrado").inexistentMsg())
            }
    }
    delete(req, res){
        
        let id = req.params.id
      
        if(this.validationExistence(id)){
            this.photoModel.photosDelete(id, () => {
                this.eventModel.main_photoDelete(id, () =>{
                    this.eventModel.destroy({ where: { id } })
                    .then(response => {
                        return res.json(responseFormat(response,"Evento deleteda com sucesso").defaultMsg())
                    })
                    .catch(error => {
                        return res.status(400).json(responseFormat(error).erroMsg()) 
                    })
                })
            })
        }else{
            return res.status(400).json(responseFormat({},"Este evento não está registrado").inexistentMsg())
        }  
        
    }
    photosCreate(id, req){
        return this.photoModel.photosCreate(id, req)
    }
    photosUpdate(id, req){
       return this.photoModel.photosUpdate(id, req)
    }
    validationExistence(id){
        this.eventModel.findOne({where : {id}})
        .then(obj => {    
            if(obj != null)
                return true
            else
                return false
        })
    }
    updateFiles(req){
        let data = req.body

        if(!isNullOrUndefined(data.photos_deletada))
        this.photoModel.photosArrayDelete(data.photos_deletada)
    
        if(!isNullOrUndefined(req.files.main_photo)){
            data.logotipo = `${req.headers.origin}/uploads/${req.files.main_photo[0].filename}`
            this.eventModel.main_photoDelete(id) 
        }

    }
}
export default EventController