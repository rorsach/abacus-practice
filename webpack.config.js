const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') // For generating the html index page.
const ExtractTextPlugin = require('extract-text-webpack-plugin') // For processing CSS.
const CleanWebpackPlugin = require('clean-webpack-plugin') // For cleaning out the output folder.

module.exports = {
    entry: [
        './src/js/index.js' //  The main application entry point.
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js' // The output bundle.
    },
    plugins: [
        new CleanWebpackPlugin(['dist']), 
        new ExtractTextPlugin(
            {filename: './css/style.css'}
        ),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html', // How to generate out html.
            filename: 'index.html' // What to generate.
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: ['css-loader']
                    })
            }
        ]
    },
    devServer: {
        contentBase: './dist' // Tell webpack-dev-server where to serve content from.
    }
}
