import responseFormat from '../helpers/response-format' 
import isNullOrUndefined from 'util'
import Sequelize from 'sequelize'
import fs from 'fs'


class EventController {
    
    constructor (eventModel, photoModel ) {
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
        
        data.main_photo = req.files.main_photo[0].path

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
        
        return this.eventModel.findOne({where : {id}})
        .then(obj => {

            if(obj != null){

                let data = req.body

                if(!isNullOrUndefined(data.photos_deletada))
                    this.photoModel.photosArrayDelete(data.photos_deletada)
                
                if(!isNullOrUndefined(req.files.main_photo)){
                    data.main_photo = req.files.main_photo[0].path
                    this.eventModel.main_photoDelete(id) 
                }

                this.eventModel.update( data, { where: { id } })
                .then(response => {
                    let vetor = []
                    if(!isNullOrUndefined(req.files.photos))
                        vetor = this.photosCreate(id,req)
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

                res.status(400).json(responseFormat({},"Evento inexitente").inexistentMsg())
            }
        }).catch(error => {
            res.status(400).json(responseFormat(error).erroMsg())
        })
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
                            res.status(400).json(responseFormat(error).erroMsg()) 
                        })
                    })
                })
            }else{
                res.status(400).json(responseFormat({},"Evento inexistente").inexistentMsg())
            }
        })    
        
    }
    photosCreate(id, req){
        return this.photoModel.photosCreate(id, req)
    }
    photosUpdate(id, req){
       return this.photoModel.photosUpdate(id, req)
    }
}
export default EventController