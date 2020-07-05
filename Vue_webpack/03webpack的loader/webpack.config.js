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
        filename: 'bundle.js',
       //输出文件名，文件可以自己定义，[name]的意思是与入口文件的文件对应，可以不用[name]，
       publicPath:'./dist/img/'
    },
    module: {
        rules: [
            //在webpack里使用less文件
            {
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
            },
            //在webpack里使用css文件
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            //当图片大小<limit时  使用url_loader进行图片转化
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240,
                            //当图片像素小于limit，则可使用url-loader将图片编译成base64字符串形式
                            //当图片大于limit，则必须使用file_loader来配置
                        }
                    }
                ]
            },
            //当图片太大时 使用file-loader进行转换
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name:'img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            // 将ES6语法转化成ES5语法
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            ]
    }
}