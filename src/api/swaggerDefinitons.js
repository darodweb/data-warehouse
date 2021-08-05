module.exports.swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Delilah Resto API',
        version: '1.0.0'
    },
    servers: [
        {
            url: 'http://localhost:3001/api',
            description: 'Develop'
        },
        {
            url: 'http://delilahresto/api',
            description: 'Production'
        },
    ]
}