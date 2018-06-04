import fs from 'fs'

export default (sequelize, DataType) => { 
  const About = sequelize.define('About', {
    description: {
      type: DataType.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    how_work: {
        type: DataType.STRING,
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
    createdAt: false
  })
  About.about = next => {
    return About.existAbout(() => { 
        About.findOne({where: {id : 1}})
        .then(res => next(res))
        .then(error => error)
    })
  }
  About.existAbout = next => {
    About.findOne({where: {id : 1}})
    .then(res => {
      if(res === null){
        let data = {}
        data.description = "Description about"
        data.how_work = "How work about"
        data.main_photo = "main photo"
        console.log("Create")
        About.create(data)
        .then(()=>next())
      }else{
        next()
      }
    })
    .catch(error => {
      console.log(error)
      next()
    })
  }
  About.main_photoDelete = () => {
    About.findOne({where : {id: 1}, attributes: ['main_photo']})
    .then(response => fs.unlink(response.main_photo, res => res))
    .catch(erro => console.log(erro))
  }
  return About
}