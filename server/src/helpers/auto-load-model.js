import fs from 'fs';
import path from 'path';

export default (sequelize, diretory) => {
    const dir = path.join(__dirname, '../models')
    const models = []
    fs.readdirSync(dir).forEach(file => {
      const modelDir = path.join(dir, file)
      const model = sequelize.import(modelDir)
      models[model.name] = model
    })
    return models
  }