export default (sequelize, DataType) => { 
  const Product = sequelize.define('Campaigns', {
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
    },
  });
  return Product
}