import bcrypt from 'bcrypt'

export default (sequelize, DataType) => {
  const Users = sequelize.define('Users', {
    username: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    password: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

  })
  Users.isPassword = (encodedPassword, password) => bcrypt.compareSync(password, encodedPassword)
  return Users
}
