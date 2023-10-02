let db = require('../db/index');

exports.gethxdata = (req, res) => {
  var sql = 'select * from hxdatalist'
  db.query(sql, (err, data) => {
      if(err) {
          return res.send('错误：' + err.message)
      }
      console.log(data,'nnn')
      res.send(data)
  })
}

exports.pushhxdata = (req, res) => {
  var sql = `insert into hxdatalist (type,time,imgUrl,text) values (?,?,?,?)`
  db.query(sql, [req.query.type,req.query.time,req.query.imgUrl,req.query.text], (err,data) => {
    if(err) return res.send('错误d'+err.message)
    res.send({
      status: 200,
      message: '添加成功'
    })
  })
}

exports.delethxdata = (req,res) => {
  var sql = 'delete from hxdatalist where id = ?'
  db.query(sql, [req.query.id], (err, data) => {
    if(err) {
        return res.send('错误：' + err.message)
    }
    res.send({
        status: 200,
        message: '删除成功'
    })
})
}

exports.updatehxdata = (req, res) => {        //通过id更新数据
  var sql = 'update hxdatalist set type = ?, time = ?, imgUrl = ? ,text = ? where id = ?'
  db.query(sql, [req.query.type, req.query.time, req.query.imgurl, req.query.text, req.query.id], (err, data) => {
      if(err) {
          return res.send('错误：' + err.message)
      }
      res.send({
          status: 200,
          message: '修改成功'
      })
  })
}