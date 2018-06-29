import fs from 'fs'
import path from 'path'

export default (sequelize, DataType) => { 
  const Events = sequelize.define('events', {
    title: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    description: {
      type: DataType.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    main_photo: {
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
  Events.hasMany(sequelize.models.eventPhotos)
  Events.events = () => {
    return Events.findAll({attributes: ['id','title','description','main_photo']})
  }
  Events.event = id => {
    console.log(sequelize.models.eventPhotos)
    return Events.findOne({where : { id }, attributes: ['id','title','description','main_photo'], include: [{
        model: sequelize.models.eventPhotos,
        attributes: ['id','url']
      }]}
    )
  }
  Events.main_photoDelete = (id, next) => {
      Events.findOne({where : {id}, attributes: ['main_photo']})
      .then(response => {
        
        let index = response.main_photo.indexOf("uploads")
        let name = path.join(__dirname, `../../public/${response.main_photo.substr(index)}`)
        
        fs.unlink(name, res => {
          if(next)
            next()
        })
      }
    ).catch(erro => console.log(erro))
  }
  
  return Events
}