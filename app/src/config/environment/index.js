'use strict'

const _ = require('lodash')
const path = require('path')
const fs = require('fs')

let env = process.env.NODE_ENV || 'development'

let base = {
  env: env,
  logType: 'combined',
  port: process.env.PORT || 3001
}

base = _.merge(base, require(`./${env}.js`) || {})

let loadLocalConfig = (name) => {
  let localConfigPath = path.join(__dirname, name)
  if (fs.existsSync(localConfigPath)) {
    base = _.merge(base, require(localConfigPath))
    console.log(`loaded ${localConfigPath} config`)
  }
}

// local file can be used to customize any config values during development
if (base.env === 'test') {
  loadLocalConfig('test-local.js')
} else {
  loadLocalConfig('local.js')
}

module.exports = base
