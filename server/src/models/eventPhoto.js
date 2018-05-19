import fs from 'fs'
import { isArray } from 'util';
export default (sequelize, DataType) => {
    const EventPhotos = sequelize.define('EventPhotos', {
        url: {
          type: DataType.STRING,
          allowNull: false,
          validate: {
            notEmpty: true
          }
        }
      },
      {
        createdAt: false,
        updatedAt: false
      })
    EventPhotos.photosCreate = (id, req) => {
        
        let array = []
        
        req.files.photos.forEach(element => {
            
            let objeto = {}

            objeto.url = element.path
            objeto.EventId = id
            EventPhotos.create(objeto)
            array.push(objeto)
        })
        
        return array
    }
    EventPhotos.photosUpdate = (id, req) => {
        
        let array = []
        let array1 = []
        let EventId = id
        
        EventPhotos.findAll({where : {EventId}})
        .then(obj => {
            
            obj.forEach(element => array1.push(element.id))
            
            req.files.photos.forEach((element, index) => {
                let objeto = {}
                objeto.url = element.path
                objeto.EventId = EventId           
                EventPhotos.create(objeto)
                .then(response => array.push(objeto))
                .catch(erro => console.log(erro))       
            })    
        }).catch(erro => console.log(erro))
        
        return array
      }
      EventPhotos.photosDelete = (EventId, next)  => {
        
        let array = []
        
        EventPhotos.findAll({where : {EventId}})
        .then(obj =>  {
            
            obj.forEach(element => array.push(element.id))
    
            array.forEach( element => {    
                EventPhotos.findOne({where : {id : element}, attributes: ['url']})
                .then(response => fs.unlink(response.url, () => console.log(response.url)))
                .catch(erro => console.log(erro))
            })
            next()    
        })
      }
      EventPhotos.photosArrayDelete = array  => {
        
        if(!isArray(array))
            array = [array]
        
        array.forEach( element => {    
            EventPhotos.findOne({where : {id : element}, attributes: ['url']})
            .then(response => {
                fs.unlink(response.url, res => {
                    EventPhotos.destroy({ where: { id : element}})
                })
            }).catch(erro => console.log("Foto não Registrada"))
        })
      }
      
      return EventPhotos
}