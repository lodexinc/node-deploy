'use strict'

let config = require('../config')
let morgan = require('koa-morgan')
let path = require('path')
let serve = require('koa-static')
let views = require('koa-views')
let etag = require('koa-etag')
let body = require('koa-body')
let methodOverride = require('koa-methodoverride')
let Handlebars = require('handlebars')
Handlebars.registerHelper('json', (context) => {
  return JSON.stringify(context)
})

module.exports = (app) => {
  app
    .use(body({
      multipart: true
    }))
    .use(methodOverride())
    .use(etag())
    .use(morgan.middleware(config.logType))

  app.use(views(path.join(__dirname, '../client'), {
    default: 'html',
    map: {'html': 'handlebars'}
  }))

  require('./routes')(app)
}
