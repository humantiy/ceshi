//解析文件的路径 成功或者是失败都要返回一个东西 读取文件的工具方法
const fs = require('fs');
module.exports.getFileJsonData = (filePath) => {
    //根据文件路径获取文件的内容
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8' ,(err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(data));
            }
        });
    });
}