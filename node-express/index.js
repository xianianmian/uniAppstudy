const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const axios = require('axios')
app.use(bodyParser.json())
 
//处理POST请求
// app.post('/',(req,res)=>{
//     console.log(req.body)
//     res.json(req.body)
// })
//处理GET请求
app.get('/',(req,res)=>{
    console.log(req.body)
    res.json(req.body)
})



// 开发者信息
const wx = {
  appid:'wxd38976996891db86',  // 填写用户自己的appid
  secret:'16e2e9181f0684ca098a4f53f641acaf'  // 填写用户自己的密钥
}

// 写在app.listen即可
// '/login'即响应在小程序中的请求http://127.0.0.1:3000/login
app.post('/login',(req,res)=>{
  console.log('code: '+req.body.code) // 打印一下code
  // code,appid,secret都有了就发起请求到微信接口服务校验
  var url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + wx.appid + '&secret=' + wx.secret + '&js_code=' + req.body.code + '&grant_type=authorization_code'
  axios.get(url, (err, response, body) => {
  //	可以获取到 session_key(会话信息) 、 openid(用户唯一标识)
      console.log('session: ' + body)
  //  上面的session信息是字符串数据，通过JSON.parse()转成js对象
      var session = JSON.parse(body)
    console.log(session);
  })
})

 
//监听3000端口
app.listen(3000,()=>{
    console.log('server running | http://127.0.0.1:3000')
})