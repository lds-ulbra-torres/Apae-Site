export default (sequelize, DataType) => { 
    const Schedule = sequelize.define('schedule', {
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
          notEmpty: true,
          is: ["(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/[12][0-9]{3}",'g'] 
        }
      },
      hour: {
        type: DataType.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          is: ["([0-1][0-9]|[2][0-3]):(0[1-9]|[1-5][1-9]):(0[1-9]|[1-5][0-9])",'g']
        }
      }
    },
    {
      createdAt: false,
      updatedAt: false
    }) 
    return Schedule
  }