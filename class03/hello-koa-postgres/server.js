const Koa = require('koa');
const app = new Koa();

//response
app.use(ctx => {
    ctx.body = 'Hello Koa.\n' + 'Thanks StuQ Team!';
});

app.listen(3000);