const {exec, escape} = require('../db/mysql')
const xss = require('xss')

const getList = async (author, keyword)=>{
    let sql = `select * from blogs where 1=1 `;
    if(author){
        sql += `and author='${author}' `   //拼接搜索作者
    }
    if(keyword){
        sql += `and title='%${keyword}%' ` //拼接搜索关键词
    }
    sql += `order by createtime desc;`   //倒序排列
    //返回promise
    return await exec(sql)
}


module.exports = {
    getList
}