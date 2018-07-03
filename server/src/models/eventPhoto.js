import fs from 'fs'
import path from 'path'
import { isArray } from 'util';

export default (sequelize, DataType) => {
    const EventPhotos = sequelize.define('eventPhotos', {
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
    EventPhotos.photosCreate = (id, req, storage) => {
        
        let array = []
        console.log(storage)
        req.files.photos.forEach(element => {
            
            let objeto = {}

            objeto.url = `${storage}/uploads/${element.filename}`
            objeto.eventId = id
            EventPhotos.create(objeto)
            array.push(objeto)
        })
        
        return array
    }
      EventPhotos.photosDelete = (EventId, next)  => {
        
        let array = []
        
        EventPhotos.findAll({where : {EventId}})
        .then(obj =>  {
            
            obj.forEach(element => array.push(element.id))
    
            array.forEach( element => {    
                EventPhotos.findOne({where : {id : element}, attributes: ['url']})
                .then(response => {
                    let index = response.url.indexOf("uploads")
                    let name = path.join(__dirname, `../../public/${response.url.substr(index)}`)
                    fs.unlink(name, () => console.log(response.url))
                })
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

                let index = response.url.indexOf("uploads")
                let name = path.join(__dirname, `../../public/${response.url.substr(index)}`)
            
                fs.unlink(name, res => {
                    EventPhotos.destroy({ where: { id : element}})
                })
            }).catch(erro => console.log("Foto não Registrada"))
        })
      }
      
      return EventPhotos
}