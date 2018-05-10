import { isUndefined } from "util";

class CampaignController {
    
    constructor (campaignModel) {
        this.campaignModel = campaignModel
    }

    get(req, res){
        return this.campaignModel.findOne({
            where : { active : true }
        })
            .then(response => res.json(response))
            .catch(error => res.status(412).json({msg: error.message}))
    }
    getAll(req, res){
        return this.campaignModel.findAll({})
            .then(response => res.json(response))
            .catch(error => res.status(412).json({msg: error.message}))
    }
    create(req, res){
        let data = req.body
        data.active = true
        data.logotipo = req.files.logotipo[0].path
        data.imagem_promo = req.files.imagem_promo[0].path
        return this.campaignModel.create(data)
            .then(response => {
                this.campaignModel.update( { active : false }, { where : { active : true } })
                this.campaignModel.update( { active: true }, { where: { id : response.id}})
                res.json(response)
            })
            .catch(error => res.status(412).json({msg: error.message}))
    }
    update(req, res){
        let data = req.body
        console.log(isUndefined(req.files.logotipo))
        console.log(isUndefined(req.files.imagem_promo))
        if(isUndefined(req.files.logotipo))
            data.logotipo = req.files.logotipo.path
        if( isUndefined(req.files.imagem_promo))
            data.imagem_promo = req.files.imagem_promo.path
        return this.campaignModel.update( data, { where: { id: data.id } })
            .then(response => res.json(response))
            .catch(error => res.status(412).json({msg: error.message}))
    }
    delete(req, res){
        let data = req.body
        return this.campaignModel.destroy({ where: { id : data.id } })
            .then(response => res.json(response))
            .catch(error => res.status(412).json({msg: error.message}))
    }
}
export default CampaignController