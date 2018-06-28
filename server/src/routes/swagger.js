import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../swagger/swagger.json'

module.exports = app => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
}