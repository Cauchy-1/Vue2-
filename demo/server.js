//引入express
const express = require('express')

const history = require('connect-history-api-fallback');

const app = express()

app.use(history())
app.use(express.static(__dirname + '/static'))

//配置一个后端路由 require responce
app.get('/person', (req, res) => {
    //给客户端返回东西
    res.send({
        name: 'Tom',
        age: 18
    })
})

//端口监听 5005是端口号 回调收到一个错误对象
app.listen(5005, (err) => {
    if (!err) console.log('服务器启动成功了！')
})