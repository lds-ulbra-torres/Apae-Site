import Sequelize from 'sequelize';
import loadModels from '../helpers/auto-load-model'
import dbConfig from './dbConfig'

let database = null;

export default app => {
  if (!database) {
    const config = app.config;
    const sequelize = new Sequelize(
        config.database,
        config.username,
        config.password,
        config.params
    );

    database = {
      sequelize,
      Sequelize,
      models: {},
    };

    database.models = loadModels(sequelize, '../models')

    sequelize.sync().done(() => database)
  }
  return database
}
