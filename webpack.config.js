
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    mode: "development",
    devServer : {
        contentBase: "./dist"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{loader: 'babel-loader'}],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: [{loader: 'html-loader',options:{minimize: true}}],
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: './index.html'
    })]
}