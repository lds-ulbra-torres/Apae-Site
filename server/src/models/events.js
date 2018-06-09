import fs from 'fs'
import path from 'path'

export default (sequelize, DataType) => { 
  const Events = sequelize.define('Events', {
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
  Events.hasMany(sequelize.models.EventPhotos)
  Events.events = () => {
    return Events.findAll({attributes: ['id','title','description','main_photo'], include: [{
      model: sequelize.models.EventPhotos,
      attributes: ['id','url']
     }]})
  }
  Events.event = id => {
    return Events.findOne({where : { id }, attributes: ['id','title','description','main_photo'], include: [{
        model: sequelize.models.EventPhotos,
        attributes: ['id','url']
      }]}
    )
  }
  Events.main_photoDelete = (id, next) => {
      Events.findOne({where : {id}, attributes: ['main_photo']})
      .then(response => {
        
        let index = response.main_photo.indexOf("uploads")
        let name = path.join(__dirname, `../../public/${response.imagem_promo.substr(index)}`)
        
        fs.unlink(name, res => {
          if(next)
            next()
        })
      }
    ).catch(erro => console.log(erro))
  }
  
  return Events
}