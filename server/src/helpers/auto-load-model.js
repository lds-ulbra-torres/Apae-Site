
import fs from 'fs';
import path from 'path';

module.exports = sequelize => {
    const dir = path.join(__dirname, '../models')
    const models = []
    fs.readdirSync(dir).forEach(file => {
      const modelDir = path.join(dir, file)
      const model = sequelize.import(modelDir)
      models[model.name] = model
    })
    return models
  }