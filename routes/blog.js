const router = require('koa-router')()
const {
    getList
  } = require('../controller/blog')

  const {
    SuccessModel,
    ErrorModel
  } = require("../model/resModel")

  router.prefix('/api/blog')
  router.get('/list', async (ctx, next) => {   //获取博客列表
    let author = ctx.query.author || ""
    let keyword = ctx.query.keyword || ""
    // if(req.session.username == null){
    //     //未登录
    //     res.json(
    //         new ErrorModel('未登录')
    //     )
    //     return
    // }
    let listData = await getList(author, keyword);
    ctx.body = new SuccessModel(listData);
  });
  
  module.exports = router