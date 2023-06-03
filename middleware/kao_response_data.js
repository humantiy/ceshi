const koa:Application |{} = require('koa');
const app:Application = new koa()
const responseDurationMiddleware = require('./middleware')
app.use(responseDurationMiddleware)
const responseDurationMiddleware=require('./middleware/koa_response_duration')