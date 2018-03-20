const fn_hi = async (ctx, next) => {
  let name = ctx.params.name
  ctx.body = `<h1>hi, ${name}</h1>`
}

module.exports = {
  'GET /hi/:name': fn_hi
}