module.exports = async (ctx, next) => {
    const contentType :string = 'application/json;charset=utf-8'
    //设置字符集和josn格式
    ctx.set('contentType', contentType)
    //开放所有请求方式
    ctx.set('Access-Control-Allow-Origin', '*')
    ctx.set('Access-Control-Allow-Methods', '*')
    ctx.set('Access-Control-Allow-Headers', '*')
    await next()
}