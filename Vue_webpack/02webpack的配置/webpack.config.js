var path = require('path');
module.exports = {
    entry: './src/main.js' ,
    //配置入口文件，入口文件可以以对象的形式配置，也可以以数组的形式配置,后缀名可以省略
    //对象形式配置入口
   output: {
        //输出文件出口
         // 输出路径，在这我们要手动创建一个文件夹，名字可以自己命名，
         // 输出的文件路径是相对于本文件的路径
        path:path.resolve(__dirname,'dist'),  //输出路径
        filename: 'bundle.js'     //输出文件名，文件可以自己定义，[name]的意思是与入口文件的文件对应，可以不用[name]，
    }
}