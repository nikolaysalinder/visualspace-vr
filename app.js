const Koa = require('koa');
const Router = require('koa-router');
const logger = require('koa-logger');


const app = new Koa();
const router = new Router();

app.use(logger());


router.get('/hello', async (ctx, next) => {
  console.log(ctx.request);
  ctx.body = "Вот такое боди для гет";
  await next();
  ctx.body = "после авэйта";
});

router.post('/hello', async (ctx, next) => {
  ctx.body = "Вот такое боди для пост";
});

router.get('/:id', async (ctx, next)=>{
  ctx.body = 'The id you specified is ' + ctx.params.id;
});

app.use(async (ctx, next) => {
  ctx.body = "Вот такой вот ответ";
  console.log('start');
  console.log('1');

  await next();
  console.log('2');
});
app.use(async (ctx, next) => {
  console.log('3');

  await next();
  console.log('4');
});
app.use(async (ctx, next) => {
  console.log('5');

  await next();
  console.log('6');
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, function(){
    console.log('Server running on https://localhost:3000');
});