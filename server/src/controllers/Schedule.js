import responseFormat from '../helpers/response-format'
class Schedule{
    constructor(model){
        this.modelSchedule = model
    }

    get(req, res){

        let id = req.params.id

        return this.modelSchedule.findOne({where : {id}, attributes:['id','description', 'date', 'hour']})
        .then(response => {
            if(response != null)
                res.json(responseFormat(response,"ok").defaultMsg()) 
            else
                res.status(400).json(responseFormat({},"Este compromisso não está registrado").inexistentMsg())
        })
        .catch(erro => res.status(400).json(responseFormat(erro).erroMsg()) )
    }

    getAll(req, res){
        return this.modelSchedule.findAll({attributes:['id','description', 'date', 'hour']})
        .then(response => res.json(responseFormat(response,"ok").defaultMsg()) )
        .catch(erro => res.status(400).json(responseFormat(erro).erroMsg()) )
    }
    create(req, res){
        
        let data = req.body

        return this.modelSchedule.create(data)
        .then(response => res.json(responseFormat(response,"Compromisso criado com sucesso").defaultMsg()) )
        .catch(erro => res.status(400).json(responseFormat(erro).erroMsg()) )
    }
    update(req,res){

        let data = req.body
        let id = req.params.id

        return this.modelSchedule.findOne({ where : {id}})
        .then(obj => {
            if(obj != null){
                this.modelSchedule.update(data,{where : {id}})
                .then(response => res.json(responseFormat(response,"Compromisso atualizado com sucesso").defaultMsg()) )
                .catch(erro => res.status(400).json(responseFormat(erro).erroMsg()) )
            }else{
                res.status(400).json(responseFormat({},"Este compromisso não está registrado").inexistentMsg())
            }
        })
        .catch(erro => res.status(400).json(responseFormat(erro).erroMsg()) )
    }
    delete(req ,res){

        let id = req.params.id

        return this.modelSchedule.findOne({ where : {id}})
        .then(obj => {
            if(obj != null){
                this.modelSchedule.destroy({where : {id}})
                .then(response => res.json(responseFormat(response,"Compromisso deletetado com sucesso").defaultMsg()) )
                .catch(erro => res.status(400).json(responseFormat(erro).erroMsg()) )
            }else{
                res.status(400).json(responseFormat({},"Este compromisso não está registrado").inexistentMsg())
            }
        })
        .catch(erro => res.status(400).json(responseFormat(erro).erroMsg()) )
    }
}

export default Schedule