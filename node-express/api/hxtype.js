let db = require('../db/index');

exports.gethxtype = (req, res) => {
  var sql = 'select * from hxtypelist'
  db.query(sql, (err, data) => {
      if(err) {
          return res.send('错误：' + err.message)
      }
      res.send(data)
  })
}