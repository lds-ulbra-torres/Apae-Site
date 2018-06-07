import fs from 'fs'

export default (sequelize, DataType) => { 
  const Campaigns = sequelize.define('Campaigns', {
    description: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    logotipo: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    how_works: {
      type: DataType.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    how_pay: {
      type: DataType.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    how_associated: {
      type: DataType.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    imagem_promo: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    hashtag: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    facebook_page: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    active: {
      type: DataType.BOOLEAN,
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
  Campaigns.logotipoDelete = (id, next)  => {  
      Campaigns.findOne({where : {id }, attributes: ['logotipo']})
      .then(response => fs.unlink(response.logotipo, res =>{
        if(next)
          next()
      }))    
  }
  Campaigns.imagem_promoDelete = (id, next)  => {  
    Campaigns.findOne({where : {id }, attributes: ['imagem_promo']})
    .then(response => fs.unlink(response.imagem_promo, res => {
      if(next)
          next()
    }))    
  }
  Campaigns.imagensDelete = (id, next)  => {  
    Campaigns.logotipoDelete(id, ()=> {
      Campaigns.imagem_promoDelete(id, () => {
        next()
      })
    })
  }
  return Campaigns
}