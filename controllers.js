const fs = require('fs')

function addMapping (router, mapping) {
  for (var url in mapping) {
    if (url.startsWith('GET')) {
      let path = url.slice(4)
      router.get(path, mapping[url])
    } else if (url.startsWith('POST')) {
      let path = url.slice(5)
      router.post(path, mapping[url])
    } else if (url.startsWith('PUT')) {
      let path = url.slice(4)
      router.put(path, mapping[url])
    } else if (url.startsWith('DELETE')) {
      let path = url.slice(7)
      router.delete(path, mapping[url])
    } else {
      console.log(`invalid URL: ${url}`)
    }
  }
}

function addControllers (router, dir) {
  fs.readdirSync(__dirname + '/' + dir).filter(item => {
    return item.endsWith('.js')
  }).forEach(element => {
    let mapping = require(__dirname + '/' + dir + '/' + element)
    addMapping(router, mapping)
  })
}

module.exports = function (dir) {
  let controllers_dir = dir || 'controllers'
  router = require('koa-router')()
  addControllers(router, controllers_dir)
  return router.routes()
}
