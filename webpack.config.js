const path=require('path');
//导入包
const HtmlWebpackPlugin = require("html-webpack-plugin");

const VueLoaderPlugin = require("vue-loader/lib/plugin");

const vuePlugin = new VueLoaderPlugin();

//创建对象
const htmlPlugin = new HtmlWebpackPlugin({
    //设置生成预览页面的模板文件
    template:"./src/index.html",
    //设置生成的预览页面名称
    filename:"index.html"
})


module.exports={
    mode: "development",
    // mode: "production",

    entry: path.join(__dirname, "./src/index.js"),
    output: {
        path: path.join(__dirname, './dist'),
        filename: "bundle.js"
    },

    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress:true
    },
    plugins:[ htmlPlugin, vuePlugin ],
    module: {
        rules:[
            {
                //test设置需要匹配的文件类型，支持正则
                test:/\.css$/,
                //use表示该文件类型需要调用的loader
                use:['style-loader','css-loader','postcss-loader']
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            },
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            },
            {
                test:/\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
                //limit用来设置字节数，只有小于limit值的图片，才会转换
                //为base64图片
                use:"url-loader?limit=200000000"
            },
            {
                test:/\.js$/,
                use:"babel-loader",
                //exclude为排除项，意思是不要处理node_modules中的js文件
                exclude:/node_modules/
            },
            { 
                test:/\.vue$/,
                loader:"vue-loader",
                
            }
        ]
    }
}