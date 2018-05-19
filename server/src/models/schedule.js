export default (sequelize, DataType) => { 
    const Schedule = sequelize.define('Schedule', {
      description: {
        type: DataType.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      date: {
        type: DataType.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      hour: {
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
    return Schedule
  }