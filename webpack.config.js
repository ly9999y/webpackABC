const path=require('path');
//导入包
const HtmlWebpackPlugin = require("html-webpack-plugin");
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
    plugins:[ htmlPlugin ]
}