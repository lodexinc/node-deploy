'use strict'

let config = require('./config')

// Bootstrap server
let app = require('koa')()
require('./config/koa')(app)

app.listen(config.port, config.ip, () => {
  console.log(`Koa server listening on port ${config.port}, in ${config.env} mode`)
})

// Expose app
exports = module.exports = app
