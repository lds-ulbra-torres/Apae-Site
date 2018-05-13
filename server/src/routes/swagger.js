import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../swagger/swagger.json'

export default app => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
}