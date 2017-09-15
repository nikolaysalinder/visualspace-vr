const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});
console.log('Express запущен на http://localhost:3000: нажмите Ctr+ C для завершения');
app.listen(3000);