const Koa = require('koa');
const app = new Koa();



// 默认监听3000 端口
// 如果占用以有端口请修改
app.listen(3000, () => {
    console.log('mock serve is running...')
});