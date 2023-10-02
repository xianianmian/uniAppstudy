let express = require('express')
let router = express.Router()
let hxdata = require('./api/hxdata')
let hxtype = require('./api/hxtype')

router.get('/hxdata/get', hxdata.gethxdata)
router.post('/hxdata/post', hxdata.pushhxdata)
router.delete('/hxdata/delete',hxdata.delethxdata)
router.put('/hxdata/put',hxdata.updatehxdata)
router.get('/hxtype/get',hxtype.gethxtype)

module.exports = router
