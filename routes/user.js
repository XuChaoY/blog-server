const router = require('koa-router')()

const {
    SuccessModel,
    ErrorModel
} = require("../model/resModel")

router.prefix('/api/user')

module.exports = router