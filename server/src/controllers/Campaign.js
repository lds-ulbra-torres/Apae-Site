import responseFormat from '../helpers/response-format' 
import { isNullOrUndefined, isArray } from 'util';
import fs from 'fs'
class CampaignController {
    
    constructor (campaignModel) {
        this.campaignModel = campaignModel
    }

    get(req, res){
        
        return this.campaignModel.findOne({
            where : { active : true }
        })
        .then(response => {
            res.json(responseFormat(response,"ok").defaultMsg())
        })
        .catch(error => {
            res.status(400).json(responseFormat(error).erroMsg())
        })
    }
    getAll(req, res){

        return this.campaignModel.findAll({})
        .then(response => {
            res.json(responseFormat(response,"ok").defaultMsg())
        
        })
        .catch(error => {
            res.status(400).json(responseFormat(error).erroMsg())
        })
    }
    create(req, res){
        
        let data = req.body
        data.active = true

        if(isNullOrUndefined(req.files.logotipo))
            return res.status(400).json(({status:400, msg : "É obrigatorio o Logotipo",obj:{}}))      
        if(isNullOrUndefined(req.files.imagem_promo))
            return res.status(400).json({status:400, msg : "É obrigatorio a Imagem Promocinal",obj:{}})
        
        data.logotipo = req.files.logotipo[0].path
        data.imagem_promo = req.files.imagem_promo[0].path
        
        return this.campaignModel.create(data)
            .then(response => {
                this.campaignModel.update( { active : false }, { where : { active : true } })
                this.campaignModel.update( { active: true }, { where: { id : response.id}})
                res.json(responseFormat(response,"Campanha criada com sucesso").defaultMsg())
            })
            .catch(error => {
                res.status(400).json(responseFormat(error).erroMsg())
            })
    }
    update(req, res){

        let data = req.body
        let id = req.params.id
        
        return this.campaignModel.findOne({where : {id}})
        .then(obj => { 
            if(obj != null){
                if(!isNullOrUndefined(req.files.logotipo)){
                    data.logotipo = req.files.logotipo[0].path
                    this.campaignModel.logotipoDelete(id)
                }      
                if(!isNullOrUndefined(req.files.imagem_promo)){
                    data.imagem_promo = req.files.imagem_promo[0].path
                    this.campaignModel.imagem_promoDelete(id)
                }
                this.campaignModel.update( data, { where: { id } })
                .then(response => {
                    res.json(responseFormat(response,"Campanha atualizada com sucesso").defaultMsg())
                })
                .catch(error => {
                    res.status(400).json(responseFormat(error).erroMsg())
                })
            }else{
                if(!isNullOrUndefined(req.files.logotipo))
                    fs.unlink(req.files.logotipo[0].path, () => console.log(req.files.logotipo[0].path))
                if(!isNullOrUndefined(req.files.imagem_promo))
                      fs.unlink(req.files.imagem_promo[0].path, () => console.log(req.files.imagem_promo[0].path))
                res.status(400).json(responseFormat({},"Campanha inexistente").inexistentMsg())
            }
        })
    }
    delete(req, res){
        
        let id = req.params.id
    
        return this.campaignModel.findOne({where : {id}})
        .then(obj => { 
            if(obj != null){
                this.campaignModel.imagensDelete(id, () => {
                    this.campaignModel.destroy({ where: { id } })
                    .then(response => {            
                        this.campaignModel.max('id')
                        .then(resp => this.campaignModel.update( { active : true }, { where : { id: resp } }) )
                        .catch(error => res.status(400).json(responseFormat(error).erroMsg()) )
                        res.json(responseFormat(response,"Campanha deleteda com sucesso").defaultMsg())
                    })
                    .catch(error => {
                        res.status(400).json(responseFormat(error).erroMsg()) 
                    })
                })
            }else{
                res.status(400).json(responseFormat({},"Campanha inexistente").inexistentMsg())
            }
        })
    }
}
export default CampaignController