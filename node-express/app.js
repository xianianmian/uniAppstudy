let express = require('express')
let app = express()
let cors = require('cors')
let bodyParser = require('body-parser')


app.use(bodyParser.json());  //配置解析，用于解析json和urlencoded格式的数据
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors())    

let router = require('./router')
app.use('/hx',router)              //配置路由

app.listen(8081, () => {
    console.log('服务器启动成功');
    console.log('Express server running at http://127.0.0.1:8081/hxdata')
})
