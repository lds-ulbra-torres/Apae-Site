import responseFormat from '../helpers/response-format' 
import {isNullOrUndefined} from 'util'
import fs from 'fs'

class EventController {
    
    constructor (eventModel, photoModel, storage) {
        this.eventModel = eventModel
        this.photoModel = photoModel
        this.storage = storage
    }

    get(req, res){

        let id = req.params.id
        
        return this.eventModel.event(id)
        .then(response => {
            res.json(responseFormat(response,"ok").defaultMsg())
        })
        .catch(error => {
            this.eventModel.event2(id)
            .then(response => {
                res.json(responseFormat(response,"ok").defaultMsg())
            })
            .catch(error => {
                res.status(400).json({status:400, msg : "Não existe evento",obj:error})
            })
        })
    }
    getAll(req, res){

        return this.eventModel.events()
        .then(response => {
            res.json(responseFormat(response,"ok").defaultMsg())
        })
        .catch(error => {
            res.status(400).json({status:400, msg : "Não existe eventos",obj:error})
        })
    }
    create(req, res){
        
        let data = req.body

        if(isNullOrUndefined(req.files.main_photo))
            return res.status(400).json(({status:400, msg : "É obrigatorio uma Foto de Capa",obj:{}}))      
        
        data.main_photo = `${this.storage}/uploads/${req.files.main_photo[0].filename}`
        return this.eventModel.create(data)
            .then(response => {
                let vetor = []
                if(!isNullOrUndefined(req.files.photos)){
                    if(!isNullOrUndefined(req.files.photos)){
                        vetor = this.photoModel.photosCreate(response.id,req,this.storage)
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

        return this.eventModel.findOne({where : {id}})
        .then(obj => {    
            if(obj != null){
                let data = req.body

                if(!isNullOrUndefined(data.photos_deletada)){
                    this.photoModel.photosArrayDelete(data.photos_deletada)
                }
                if(!isNullOrUndefined(req.files.main_photo)){
                    data.main_photo = `${this.storage}/uploads/${req.files.main_photo[0].filename}`
                    this.eventModel.main_photoDelete(id)
                }

                this.eventModel.update( data, { where: { id } })
                .then(response => {
                    let vetor = []
                
                    if(!isNullOrUndefined(req.files.photos))
                        vetor = this.photoModel.photosUpdate(id,req, this.storage)
                    
                    res.json(responseFormat(response,"Evento atualizada com sucesso").defaultMsg())
                })
                .catch(error => {
                    res.status(400).json(responseFormat(error).erroMsg())
                })
            }else{
                if(!isNullOrUndefined(req.files.photos)){ 
                    req.files.photos.forEach(element => {
                        fs.unlink(element.path, () => console.log(element.path))
                    }) 
                }
                if(!isNullOrUndefined(req.files.main_photo))
                    fs.unlink(req.files.main_photo[0].path, () => console.log(req.files.main_photo[0].path))
                
                    res.status(400).json(responseFormat({},"Este evento não está registrado").inexistentMsg())
            }
        })
        .catch(error => res.status(400).json(responseFormat({},"Este evento não está registrado").inexistentMsg()))

    }
    delete(req, res){
        
        let id = req.params.id
        
        return this.eventModel.findOne({where : {id}})
        .then(obj => {    
            if(obj != null){
                this.photoModel.photosDelete(id, () => {
                    this.eventModel.main_photoDelete(id, () =>{
                        this.eventModel.destroy({ where: { id } })
                        .then(response => {
                            res.json(responseFormat(response,"Evento deleteda com sucesso").defaultMsg())
                        })
                        .catch(error => {
                            console.log(error)
                            res.status(400).json(responseFormat(error).erroMsg()) 
                        })
                    })
                })
            }else{
                res.status(400).json(responseFormat({},"Este evento não está registrado").inexistentMsg())
            }  
        }).catch(error => console.log(error))
    }
}
export default EventController