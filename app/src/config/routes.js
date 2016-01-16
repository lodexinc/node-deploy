'use strict'

let Router = require('koa-router')
let indexRouter = new Router()

indexRouter
  // match all routes but not files (i.e. routes with dots)
  .get(/^((?!\.).)*$/, function *() {
    yield this.render('index', {
      config: {
        token: '',
        user: {}
      }
    })
  })

module.exports = function (app) {
  app.use(indexRouter.routes())
}
