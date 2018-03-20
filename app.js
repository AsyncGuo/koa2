const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const controller = require('./controllers')

// // 这里可以用sync是因为启动时只运行一次，不存在性能问题
// var files = fs.readdirSync(__dirname + '/controllers')
// // 过滤js文件
// var js_files = files.filter(item => {
//   return item.endsWith('.js')
// })

// // handle Js
// for (var f of js_files) {
//   console.log('====================================');
//   console.log(`process controller: ${f}...`);
//   console.log('====================================');
//   // 导入js文件
//   let mapping = require(__dirname + '/controllers/' + f)
//   for (var url in mapping) {
//     if (url.startsWith('GET')) {
//       let path = url.slice(4)
//       router.get(path, mapping[url])
//     } else if (url.startsWith('POST ')) {
//       let path = url.slice(5)
//       router.post(path, mapping[url])
//     } else {
//       console.log('====================================');
//       console.log(`invalid URL: ${url}`);
//       console.log('====================================');
//     }
//   }
// }

const app = new  Koa()

app.use(async (ctx, next) => {
  console.log(`${ctx.request.method}  ${ctx.request.url}`);

  await next()
})

// parse request body:
app.use(bodyParser())

// add controllers:
app.use(controller())

app.listen(3300)