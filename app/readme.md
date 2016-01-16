### Sample node.js & docker application


### Prerequisites

1. Node.js 4.2.*
2. Globally installed [standard.js](http://standardjs.com/), [gulp](http://gulpjs.com/)

### Run application:

```
cd app
npm install
npm start
```

Code style
===
For coding style we 100% rely on [standard.js](http://standardjs.com/) which does not require any configuration. To run code style checks run `gulp lint`


Docker build
===

Docker build is automatically trigerred on the [docker hub](https://hub.docker.com/r/anorsich/node-deploy/) on every commit to the master branch of the repository. For production purpose automated build must be private on a docker hub. 
