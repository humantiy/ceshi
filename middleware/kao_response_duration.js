module.exports = async (ctx, next) => {
    const  start : number =Date.now();
    await next();
    const end : number = Date.now()
    const duration:number = end - start;
    ctx.set('X-Response-Time', `${duration}ms`);
}