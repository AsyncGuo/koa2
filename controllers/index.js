const fn_index = async (ctx, next) => {
  ctx.body = `
    <h1>index Page</h1>
    <form action="/signin" method="post">
        <p>Name: <input name="name" value="koa"></p>
        <p>Password: <input name="password" type="password"></p>
        <p><input type="submit" value="Submit"></p>
    </form>
  `
}

const fn_signin = async (ctx, next) => {
  let name = ctx.request.body.name || ''
  let password = ctx.request.body.password || ''
  console.log('====================================');
  console.log(`signin with name: ${name}, password: ${password}`);
  console.log('====================================');

  if (name === 'koa' && password === '123') {
    ctx.response.body = `<h1>welcome, ${name}</h1>`
  } else {
    ctx.response.body = `<h1>login failed</h1>
    <p><a href='/'>Try login</a></p>
    `
  }
}

module.exports = {
  'GET /': fn_index,
  'POST /signin': fn_signin
}
